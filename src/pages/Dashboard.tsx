import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, FileText, Upload, Clock, CheckCircle, AlertCircle, LogOut, Shield, Briefcase } from 'lucide-react';
import { auth, db, logout, handleFirestoreError, OperationType } from '../firebase';
import { collection, query, where, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Dashboard({ user }: { user: any }) {
  const [documents, setDocuments] = useState<any[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, `users/${user.uid}/documents`),
      where('userId', '==', user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDocuments(docs);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, `users/${user.uid}/documents`);
    });

    return () => unsubscribe();
  }, [user]);

  if (!user) {
    return (
      <div className="pt-40 pb-20 text-center">
        <div className="glass max-w-md mx-auto p-12 rounded-3xl">
          <Shield className="text-brand-gold mx-auto mb-6" size={48} />
          <h2 className="text-2xl font-bold mb-4">Access Restricted</h2>
          <p className="text-gray-400 mb-8">Please login to access your client dashboard and manage your documents.</p>
          <button 
            onClick={() => auth.currentUser ? null : alert('Please use the login button in the navbar')}
            className="bg-brand-gold text-brand-navy px-8 py-3 rounded-full font-bold"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const handleSimulatedUpload = async () => {
    setIsUploading(true);
    // Simulate file upload delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      await addDoc(collection(db, `users/${user.uid}/documents`), {
        userId: user.uid,
        fileName: `Document_${Date.now()}.pdf`,
        fileUrl: '#',
        status: 'pending',
        uploadedAt: serverTimestamp()
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, `users/${user.uid}/documents`);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 rounded-full border-2 border-brand-orange p-1">
              <img src={user.photoURL || 'https://via.placeholder.com/150'} alt="Profile" className="w-full h-full rounded-full object-cover" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Welcome, {user.displayName}</h1>
              <p className="text-gray-400 text-sm">Client ID: {user.uid.substring(0, 8).toUpperCase()}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={handleSimulatedUpload}
              disabled={isUploading}
              className="btn-orange px-6 py-3 rounded-xl font-bold flex items-center space-x-2 hover:scale-105 transition-transform disabled:opacity-50"
            >
              <Upload size={18} />
              <span>{isUploading ? 'Uploading...' : 'Upload Document'}</span>
            </button>
            <button onClick={logout} className="glass px-6 py-3 rounded-xl font-bold flex items-center space-x-2 text-red-400">
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Active Services', value: '3', icon: Briefcase, color: 'text-blue-400' },
              { label: 'Pending Docs', value: documents.filter(d => d.status === 'pending').length, icon: Clock, color: 'text-yellow-400' },
              { label: 'Approved Docs', value: documents.filter(d => d.status === 'approved').length, icon: CheckCircle, color: 'text-green-400' }
            ].map((stat, i) => (
              <div key={i} className="glass p-8 rounded-3xl">
                <stat.icon className={`${stat.color} mb-4`} size={24} />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}

            {/* Document List */}
            <div className="md:col-span-3 glass rounded-3xl overflow-hidden mt-2">
              <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <h3 className="font-bold">Recent Documents</h3>
                <FileText className="text-brand-orange" size={20} />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white/5 text-xs uppercase text-gray-500">
                    <tr>
                      <th className="px-6 py-4">File Name</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {documents.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center text-gray-500">No documents uploaded yet.</td>
                      </tr>
                    ) : (
                      documents.map((doc) => (
                        <tr key={doc.id} className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 font-medium">{doc.fileName}</td>
                          <td className="px-6 py-4 text-sm text-gray-400">
                            {doc.uploadedAt?.toDate ? doc.uploadedAt.toDate().toLocaleDateString() : 'Just now'}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                              doc.status === 'approved' ? 'bg-green-500/20 text-green-500' : 
                              doc.status === 'pending' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-red-500/20 text-red-500'
                            }`}>
                              {doc.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-brand-orange text-sm font-bold hover:underline">View</button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl">
              <h3 className="font-bold mb-6 flex items-center space-x-2">
                <AlertCircle className="text-brand-orange" size={20} />
                <span>Notifications</span>
              </h3>
              <div className="space-y-6">
                {[
                  { title: 'Subsidy Deadline', desc: 'New industrial subsidy application deadline is approaching.', time: '2 days ago' },
                  { title: 'Policy Update', desc: 'New government policy for MSMEs issued.', time: '5 days ago' }
                ].map((note, i) => (
                  <div key={i} className="border-l-2 border-brand-orange pl-4">
                    <h4 className="text-sm font-bold mb-1">{note.title}</h4>
                    <p className="text-xs text-gray-400 mb-2">{note.desc}</p>
                    <span className="text-[10px] text-gray-600 uppercase">{note.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-3xl bg-brand-orange/5">
              <h3 className="font-bold mb-4">Need Help?</h3>
              <p className="text-sm text-gray-400 mb-6">Contact your dedicated relationship manager for any queries.</p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <User size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold">RM. Anjali Gupta</div>
                  <div className="text-xs text-gray-500">+91 98765 00000</div>
                </div>
              </div>
              <button className="w-full bg-brand-dark text-white py-3 rounded-xl text-sm font-bold border border-white/10 hover:bg-brand-accent transition-colors">
                Message RM
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
