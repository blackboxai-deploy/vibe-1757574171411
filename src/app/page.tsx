'use client'

import { useState, useEffect } from 'react'

export default function BirthdayWishes() {
  const [showMessages, setShowMessages] = useState(false)
  const [animateTitle, setAnimateTitle] = useState(false)

  useEffect(() => {
    // Animate title on load
    setAnimateTitle(true)
  }, [])

  const handleShowMessages = () => {
    setShowMessages(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center p-4">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-purple-300 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-300 rounded-full opacity-20 animate-bounce delay-1000"></div>
      </div>

      <div className="container max-w-4xl mx-auto text-center relative z-10">
        {/* Main Title */}
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-bengali transition-all duration-1000 ${
          animateTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          🎉Happy Birthday Apu🎂
        </h1>

        {/* Action Button */}
        {!showMessages && (
          <button
            onClick={handleShowMessages}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xl md:text-2xl font-bold py-4 px-8 md:px-12 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/25 animate-pulse hover:animate-none"
          >
            Click Now Apu
          </button>
        )}

        {/* Messages Area */}
        {showMessages && (
          <div className="messages mt-8 space-y-6 animate-fade-in">
            <div className="grid gap-6 md:gap-8">
              
              {/* Message 1 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-105 animate-slide-up">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/128/833/833472.png" 
                    alt="Birthday cake" 
                    className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0"
                  />
                  <span className="text-white text-lg md:text-xl font-bengali leading-relaxed text-center md:text-left">
                    Happy Birthday, আমার আদরের সুন্দরী আপু
                  </span>
                </div>
              </div>

              {/* Message 2 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-105 animate-slide-up delay-200">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  <img 
                    src="https://assets.telegraphindia.com/abp/2021/Nov/1636100687_new-project-2021-11-05t131444-784.jpg" 
                    alt="Gift" 
                    className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg object-cover"
                  />
                  <span className="text-white text-lg md:text-xl font-bengali leading-relaxed text-center md:text-left">
                    তোমার মতো একজন বোন পেয়ে আমি সত্যিই নিজেকে পৃথিবীর সবচেয়ে ভাগ্যবান মনে করি। আমাদের পরিচয় হয়তো বেশি দিনের নয়, কিন্তু মনে হয় যেন বহুদিনের সম্পর্ক যেন জন্ম থেকেই আমরা একে অপরকে চিনি।
                  </span>
                </div>
              </div>

              {/* Message 3 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-105 animate-slide-up delay-400">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  <img 
                    src="https://asset.kalerkantho.com/public/news_images/2023/09/12/1694497663-7e40e1571c612d12fb9487521c1de30b.jpg" 
                    alt="Balloon" 
                    className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg object-cover"
                  />
                  <span className="text-white text-lg md:text-xl font-bengali leading-relaxed text-center md:text-left">
                    আল্লাহর কাছে আমার একটাই প্রার্থনা—যতদিন আমরা বেঁচে থাকি, ততদিন যেন একইভাবে একে অপরের বন্ধু, ভাই-বোন আর জীবনের আপনজন হয়ে থাকি।
                  </span>
                </div>
              </div>

              {/* Message 4 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-105 animate-slide-up delay-600">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  <img 
                    src="https://uploads.onecompiler.io/43wctvj8p/43wcu753z/image_1757569012934.png" 
                    alt="Special message" 
                    className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg object-cover"
                  />
                  <span className="text-white text-lg md:text-xl font-bengali leading-relaxed text-center md:text-left">
                    আজকের এই বিশেষ দিনে তোমার প্রতিটি মুহূর্ত ভরে উঠুক আনন্দে। তোমার হাসি হোক অফুরান, স্বপ্নগুলো পূর্ণ হোক একে একে, আর জীবনের প্রতিটি পথ আলোকিত হোক ভালোবাসা ও সাফল্যে। আমরা তোমাকে নিয়ে গর্বও করি। আপু ❤❤
                  </span>
                </div>
              </div>

            </div>

            {/* Celebration Text */}
            <div className="mt-12 animate-bounce">
              <p className="text-white text-2xl md:text-3xl font-bold">
                🎊 Many Many Happy Returns 🎊
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}