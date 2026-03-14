import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, CheckCircle, Upload, MessageCircle, ArrowRight, CreditCard, ShieldCheck, Zap } from 'lucide-react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function Payment() {
  const [step, setStep] = React.useState(1);
  const [paymentMethod, setPaymentMethod] = React.useState<'upi' | 'gateway' | null>(null);
  const upiId = "darshanng@okicici";
  const upiLink = `upi://pay?pa=${upiId}&pn=Darshan%20N%20G&cu=INR`;
  // For testing ₹1 payment: upi://pay?pa=darshanng@okicici&pn=Darshan%20N%20G&am=1&cu=INR

  const handleRazorpay = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", // Replace with actual key
      amount: 500000, // Amount in paise (e.g., 5000 INR)
      currency: "INR",
      name: "WingsForShare",
      description: "Digital Solution Advance Payment",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=200&h=200",
      handler: function (response: any) {
        console.log("Payment Success:", response.razorpay_payment_id);
        setStep(3);
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#000000"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="pt-32 pb-32 bg-white dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full mb-6"
          >
            <ShieldCheck size={16} className="text-black dark:text-white" />
            <span className="text-xs font-bold uppercase tracking-widest text-black/60 dark:text-white/60">Secure Checkout</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black dark:text-white mb-6">Complete Your <span className="text-black/40 dark:text-white/40">Setup</span></h1>
          <p className="text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto">Follow the simple steps below to start your digital business setup with our premium systems.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between mb-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-black/5 dark:bg-white/5 -translate-y-1/2 -z-10" />
          {[1, 2, 3].map((s) => (
            <div 
              key={s}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-500 shadow-xl ${
                step >= s 
                  ? 'bg-black dark:bg-white text-white dark:text-black scale-110' 
                  : 'bg-white dark:bg-[#111] border-2 border-black/10 dark:border-white/10 text-black/40 dark:text-white/40'
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-black/5 dark:shadow-white/5">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center space-x-4 mb-10">
                  <div className="w-14 h-14 bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center text-black dark:text-white">
                    <CreditCard size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-black dark:text-white">Select Payment Method</h2>
                    <p className="text-sm text-black/60 dark:text-white/60">Choose your preferred way to pay the advance.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <button 
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-8 rounded-3xl border-2 text-left transition-all duration-300 group ${
                      paymentMethod === 'upi' 
                        ? 'border-black dark:border-white bg-black/5 dark:bg-white/5' 
                        : 'border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20'
                    }`}
                  >
                    <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Smartphone size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">UPI Payment</h3>
                    <p className="text-sm text-black/60 dark:text-white/60">Pay instantly via Google Pay, PhonePe, or Paytm.</p>
                  </button>

                  <button 
                    onClick={() => setPaymentMethod('gateway')}
                    className={`p-8 rounded-3xl border-2 text-left transition-all duration-300 group ${
                      paymentMethod === 'gateway' 
                        ? 'border-black dark:border-white bg-black/5 dark:bg-white/5' 
                        : 'border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20'
                    }`}
                  >
                    <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Zap size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">Online Payment</h3>
                    <p className="text-sm text-black/60 dark:text-white/60">Securely pay via Credit Card, Debit Card, or Net Banking.</p>
                  </button>
                </div>

                <button 
                  disabled={!paymentMethod}
                  onClick={() => {
                    if (paymentMethod === 'gateway') {
                      handleRazorpay();
                    } else {
                      setStep(2);
                    }
                  }}
                  className="w-full py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold text-lg hover:opacity-80 transition-all disabled:opacity-20 active:scale-95 shadow-xl shadow-black/10 dark:shadow-white/5"
                >
                  Continue to Payment
                </button>
              </motion.div>
            )}

            {step === 2 && paymentMethod === 'upi' && (
              <motion.div 
                key="step2-upi"
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center space-x-4 mb-10">
                  <div className="w-14 h-14 bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center text-black dark:text-white">
                    <Smartphone size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-black dark:text-white">Pay via UPI</h2>
                    <p className="text-sm text-black/60 dark:text-white/60">Scan the QR or click the button below to pay via GPay, PhonePe, or Paytm.</p>
                  </div>
                </div>

                <div className="bg-black/[0.02] dark:bg-white/[0.02] p-10 rounded-3xl text-center mb-10 border border-black/5 dark:border-white/10">
                  <h3 className="text-lg font-bold text-black dark:text-white mb-6">Scan to Pay via UPI</h3>
                  <div className="w-64 h-64 bg-white mx-auto mb-8 rounded-3xl border border-black/5 flex items-center justify-center shadow-xl p-4">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`} 
                      alt="UPI QR Code" 
                      className="w-full h-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="flex justify-center gap-6 mb-8">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="GPay" className="h-5 opacity-40 dark:opacity-60" referrerPolicy="no-referrer" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" alt="PhonePe" className="h-5 opacity-40 dark:opacity-60" referrerPolicy="no-referrer" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" alt="Paytm" className="h-5 opacity-40 dark:opacity-60" referrerPolicy="no-referrer" />
                  </div>

                  <p className="text-xl font-bold text-black dark:text-white mb-1 tracking-tight">UPI ID: {upiId}</p>
                  <p className="text-lg font-bold text-black/80 dark:text-white/80 mb-2">Name: Darshan N G</p>
                  <p className="text-sm font-bold text-black/60 dark:text-white/60 mb-2">Phone: +91 8618764541</p>
                  
                  <button 
                    onClick={() => window.location.href = upiLink}
                    className="inline-flex items-center space-x-3 bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-2xl font-bold text-lg hover:opacity-80 transition-all w-full justify-center active:scale-95 shadow-xl shadow-black/10 dark:shadow-white/5"
                  >
                    <span>Continue to Payment</span>
                    <ArrowRight size={20} />
                  </button>
                </div>

                <div className="flex space-x-4">
                  <button 
                    onClick={() => setStep(1)}
                    className="flex-1 py-5 border border-black/10 dark:border-white/10 text-black/60 dark:text-white/60 rounded-2xl font-bold hover:text-black dark:hover:text-white transition-all"
                  >
                    Back
                  </button>
                  <button 
                    onClick={() => setStep(3)}
                    className="flex-[2] py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold hover:opacity-80 transition-all active:scale-95"
                  >
                    I have made the payment
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="text-center py-10"
              >
                <div className="w-24 h-24 bg-emerald-500 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-emerald-500/20">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 tracking-tight">Payment Successful!</h2>
                <p className="text-lg text-black/60 dark:text-white/60 mb-12 leading-relaxed max-w-xl mx-auto">
                  Thank you for choosing WingsForShare. Our team has been notified of your payment. 
                  After completing payment, please share the transaction ID with us for confirmation.
                  We will contact you on WhatsApp within 2-4 hours to begin the setup process.
                </p>
                
                <div className="space-y-4 max-w-md mx-auto">
                  <a 
                    href="https://wa.me/yournumber" 
                    className="flex items-center justify-center space-x-3 w-full py-5 bg-[#25D366] text-white rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-emerald-500/10 active:scale-95"
                  >
                    <MessageCircle size={24} />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <button 
                    onClick={() => window.location.href = '/'}
                    className="w-full py-5 border border-black/10 dark:border-white/10 text-black/60 dark:text-white/60 rounded-2xl font-bold hover:text-black dark:hover:text-white transition-all active:scale-95"
                  >
                    Return to Marketplace
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-20 text-center">
          <p className="text-xs text-black/40 dark:text-white/40 mb-8 uppercase tracking-widest font-bold">Secured by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-30 dark:opacity-20 grayscale transition-all hover:grayscale-0 hover:opacity-100">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="h-8" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="GPay" className="h-8" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" alt="PhonePe" className="h-8" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className="h-8" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
  );
}
