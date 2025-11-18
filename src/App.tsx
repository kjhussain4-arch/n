import React, { useState } from 'react';
import { Header } from './components/header';
import { CustomButton } from './components/custom-button';
import { FeatureCard } from './components/feature-card';
import { StatCard } from './components/stat-card';
import { SignalCard } from './components/signal-card';

import { JoinModal } from './components/join-modal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { BarChart3, Shield, LineChart, Target, TrendingUp, Award, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Toaster } from './components/ui/sonner';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  // Use numeric cubic-bezier arrays for easing so TypeScript recognizes the type
  const easeBezier = [0.22, 1, 0.36, 1] as const;

  // Variants approach avoids some typing pitfalls when passing transition objects directly
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeBezier as any }
    }
  };

  return (
    <div className="min-h-screen" id="home">
      <Header onJoinClick={() => setJoinModalOpen(true)} />
      <Toaster position="bottom-center" />
      <JoinModal open={joinModalOpen} onOpenChange={setJoinModalOpen} />

      {/* Premium Hero Section */}
        <section className="pt-40 pb-32 bg-gradient-to-b from-white to-[#F5F6F8]" style={{ scrollMarginTop: '80px' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeBezier }}
            >
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[#C7A96B]/10 border border-[#C7A96B]/20">
                <span className="text-[#0D1B2A]" style={{ fontSize: '13px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Institutional-Grade Crypto Signals
                </span>
              </div>
              
              <h1 className="mb-8 text-[#0D1B2A] max-w-3xl mx-auto">
                VOID Professional Signal Engine. Now Open for Testers.
              </h1>
              
              <p className="text-xl text-[#88909B] mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Transparent, data-driven, multi-factor trade alerts. Professionally structured for long-term reliability and risk-adjusted returns.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <CustomButton 
                  variant="secondary" 
                  size="large"
                  onClick={() => setJoinModalOpen(true)}
                  aria-label="Join VOID Tester Program on Telegram"
                >
                  Join Free Tester Program (Telegram)
                </CustomButton>
                <CustomButton 
                  variant="ghost" 
                  size="large"
                  onClick={() => {
                    const element = document.querySelector('#signals');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Sample Signals
                </CustomButton>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-8 text-[#88909B]" style={{ fontSize: '14px' }}>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#C7A96B]" />
                  <span>Backtest Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#C7A96B]" />
                  <span>Fully Transparent Logs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#C7A96B]" />
                  <span>Independent Performance Tracking</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What VOID Does Section */}
      <section className="py-24 bg-[#F5F6F8]" style={{ scrollMarginTop: '80px' }}>
        <div className="container-custom">
          <motion.div variants={fadeInUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="mb-6 text-[#0D1B2A]">What VOID Delivers</h2>
            <p className="text-[#88909B] max-w-2xl mx-auto text-lg">
              Institutional-grade analysis distilled into actionable trade signals with comprehensive risk management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7, ease: easeBezier }}
            >
              <FeatureCard
                icon={BarChart3}
                title="Multi-Factor Signal Engine"
                description="Combines technical indicators, volume analysis, market structure, and momentum to identify high-probability setups with statistical edge."
              />
            </motion.div>
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7, ease: easeBezier }}
            >
              <FeatureCard
                icon={Shield}
                title="Risk-Adjusted Analysis"
                description="Every signal includes position sizing guidance, stop-loss placement, and multiple take-profit targets based on volatility and market conditions."
              />
            </motion.div>
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease: easeBezier }}
            >
              <FeatureCard
                icon={LineChart}
                title="Verified Performance Logs"
                description="Complete transparency with timestamped entries, exits, and performance metrics. All trades logged independently for audit trail."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real Signal Examples Section */}
      <section className="py-24 bg-white" id="signals" style={{ scrollMarginTop: '80px' }}>
        <div className="container-custom">
          
          {/* Heading */}
          <motion.div variants={fadeInUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="mb-6 text-[#0D1B2A]">VOID Trading Signals — Real Trades</h2>
            <p className="text-[#88909B] max-w-2xl mx-auto text-lg">
              Actual signals generated by our engine. Full transparency — wins, losses, and everything in between.
            </p>
          </motion.div>

          {/* Profitable Trades */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#C7A96B]" />
              <h3 className="text-[#0D1B2A]">Closed Trades — Profitable</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <SignalCard
                type="win"
                symbol="KAVAUSDT"
                direction="LONG"
                entry={0.1422}
                exit={0.1524}
                pnl="+7.17%"
                duration="1087m"
                exitReason="All Targets Analysis"
                targetsHit={['T1', 'T2', 'T3']}
                delay={0}
              />

              <SignalCard
                type="win"
                symbol="ETHUSDT"
                direction="SHORT"
                entry={3581.82}
                exit={3343.02}
                pnl="+7.14%"
                duration="1610m"
                exitReason="Safety Profit Take"
                targetsHit={['T1', 'T2']}
                delay={0.1}
              />
            </div>
          </div>

          {/* Target Hits */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#C7A96B]" />
              <h3 className="text-[#0D1B2A]">Recent Target Hits</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <SignalCard
                type="target"
                symbol="KAVAUSDT"
                targetNumber="T3"
                pnl="+6.86%"
                duration="1087m"
                delay={0}
              />

              <SignalCard
                type="target"
                symbol="ETHUSDT"
                targetNumber="T2"
                pnl="+3.66%"
                duration="1424m"
                delay={0.1}
              />

              <SignalCard
                type="target"
                symbol="DOTUSDT"
                targetNumber="T2"
                pnl="+3.66%"
                duration="604m"
                delay={0.2}
              />
            </div>
          </div>

          {/* Stop-Loss Trades */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#C7A96B]" />
              <h3 className="text-[#0D1B2A]">Closed Trades — Stopped Out</h3>
            </div>

            <p className="text-[#88909B] mb-6 text-sm">
              No strategy wins 100% of the time — this is why risk management matters.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <SignalCard
                type="loss"
                symbol="ADAUSDT"
                direction="SHORT"
                pnl="-1.93%"
                exitReason="Stop Loss Analysis"
                delay={0}
              />

              <SignalCard
                type="loss"
                symbol="ZECUSDT"
                direction="SHORT"
                pnl="-2.07%"
                exitReason="Stop Loss Analysis"
                delay={0.1}
              />
            </div>
          </div>

          <motion.div variants={fadeInUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-10">
            <a
              href="#backtest"
              className="inline-flex items-center gap-2 text-[#C7A96B] hover:text-[#B89956] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#backtest');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Backtest Results →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Tester Program Section */}
      <section className="py-24 bg-white" id="program" style={{ scrollMarginTop: '80px' }}>
        <div className="container-custom">
          <motion.div variants={fadeInUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="mb-6 text-[#0D1B2A]">The VOID Tester Program</h2>
            <p className="text-[#88909B] max-w-2xl mx-auto text-lg">
              Limited spots available. Help refine our signal engine while receiving free access to institutional-grade crypto alerts.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div variants={fadeInUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-[#0D1B2A]">What You Receive</h3>
                  <ul className="space-y-3">
                    {[
                      'Real-time trading signals via private Telegram channel',
                      'Entry, stop-loss, and multiple take-profit levels for every signal',
                      'Position sizing recommendations based on volatility',
                      'Weekly performance reports with full transparency',
                      'Direct feedback channel to our research team'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C7A96B] mt-2 flex-shrink-0" />
                        <span className="text-[#88909B]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-[#0D1B2A]">Time Commitment</h3>
                  <p className="text-[#88909B] leading-relaxed">
                    Minimal. Join the private Telegram channel and optionally provide feedback on signal quality, 
                    timing, and usability. No payment required. No personal trading data collected.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-[#0D1B2A]">Privacy & Data Protection</h3>
                  <p className="text-[#88909B] leading-relaxed">
                    Your participation is completely anonymous. We track signal performance, not individual user actions. 
                    We never sell data. Opt out anytime by leaving the channel.
                  </p>
                </div>

                <div className="pt-4">
                  <CustomButton 
                    variant="gold" 
                    size="large"
                    onClick={() => setJoinModalOpen(true)}
                    className="mb-4"
                  >
                    Join VOID Tester Group
                  </CustomButton>
                  <div className="inline-flex items-center gap-3 bg-[#0D1B2A]/5 px-5 py-3 rounded-sm">
                    <Award className="w-5 h-5 text-[#C7A96B]" />
                    <span className="text-[#0D1B2A]" style={{ fontSize: '14px' }}>
                      Limited to 50 testers — Week 1
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C7A96B]/10 to-[#0D1B2A]/5 rounded-sm blur-3xl" />
                <div className="relative bg-[#0D1B2A] rounded-sm shadow-2xl p-8 border border-[#C7A96B]/20">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-[#2E8B57]" />
                      <span className="text-[#C7A96B]" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Live Signal
                      </span>
                    </div>
                    <h3 className="text-white mb-1">BTC/USDT</h3>
                    <p className="text-[#88909B]" style={{ fontSize: '13px' }}>Sent 2 minutes ago</p>
                  </div>

                  <div className="space-y-4 bg-[#1C2530] rounded-sm p-6">
                    <div className="flex justify-between items-center pb-4 border-b border-[#C7A96B]/10">
                      <span className="text-[#88909B]" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Direction
                      </span>
                      <span className="text-[#2E8B57]" style={{ fontSize: '15px', fontWeight: 600 }}>LONG</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-[#C7A96B]/10">
                      <span className="text-[#88909B]" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Entry Zone
                      </span>
                      <span className="text-white" style={{ fontSize: '15px', fontWeight: 500 }}>$42,150 - $42,300</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-[#C7A96B]/10">
                      <span className="text-[#88909B]" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Stop Loss
                      </span>
                      <span className="text-[#C44536]" style={{ fontSize: '15px', fontWeight: 500 }}>$41,500</span>
                    </div>
                    <div>
                      <span className="text-[#88909B] mb-3 block" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Take Profit Targets
                      </span>
                      <div className="space-y-2 pl-4">
                        <div className="flex justify-between items-center">
                          <span className="text-[#C7A96B]" style={{ fontSize: '14px' }}>T1 (30%)</span>
                          <span className="text-white" style={{ fontSize: '14px' }}>$42,900</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#C7A96B]" style={{ fontSize: '14px' }}>T2 (40%)</span>
                          <span className="text-white" style={{ fontSize: '14px' }}>$43,400</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#C7A96B]" style={{ fontSize: '14px' }}>T3 (30%)</span>
                          <span className="text-white" style={{ fontSize: '14px' }}>$44,200</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#C7A96B]/10">
                    <p className="text-[#88909B]" style={{ fontSize: '12px' }}>
                      Risk/Reward: 2.1:1 • Confidence: High • Timeframe: 4H
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Team Section */}
      <section className="py-24 bg-[#F5F6F8]" id="about" style={{ scrollMarginTop: '80px' }}>
        <div className="container-custom">
          <motion.div variants={fadeInUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8 text-[#0D1B2A]">About the Team</h2>
            <p className="text-[#88909B] text-lg leading-relaxed mb-12">
              VOID is built by a small but dedicated team of four, bringing together both technical and 
  strategic expertise. Our technical side includes an AI developer focused on quantitative models 
  and automation, along with a full-stack web developer responsible for platform architecture and 
  performance. On the business side, two marketing and product specialists help shape user 
  experience, communication, and growth strategy.
            </p>

            <p className="text-[#88909B] leading-relaxed">
              This tester program allows us to validate our latest signal engine in real market conditions with a limited 
              group before considering a potential commercial launch. Your feedback directly influences product development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div variants={fadeInUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="mb-12 text-center text-[#0D1B2A]">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-[#F5F6F8] border border-[#C7A96B]/10 rounded-sm">
                <AccordionTrigger className="px-6 hover:no-underline text-[#0D1B2A]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Is this financial advice?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#88909B]">
                  No. VOID signals are for educational and informational purposes only. This is an experimental testing program. 
                  You are solely responsible for your trading decisions. We are not registered investment advisors. Always consult 
                  with a licensed financial professional before trading.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-[#F5F6F8] border border-[#C7A96B]/10 rounded-sm">
                <AccordionTrigger className="px-6 hover:no-underline text-[#0D1B2A]" style={{ fontFamily: 'var(--font-heading)' }}>
                  How are signals delivered?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#88909B]">
                  All signals are sent to a private Telegram channel in real-time when our engine identifies a setup. 
                  You'll receive push notifications with complete trade details: pair, direction, entry zone, stop-loss, 
                  and multiple take-profit targets. Signals typically include risk/reward ratio and timeframe context.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-[#F5F6F8] border border-[#C7A96B]/10 rounded-sm">
                <AccordionTrigger className="px-6 hover:no-underline text-[#0D1B2A]" style={{ fontFamily: 'var(--font-heading)' }}>
                  What data do you collect?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#88909B]">
                  We collect no personal trading data or PII. Your participation is anonymous. We only track the performance 
                  of signals we send (entry, exit, timing) — not what individual users do with them. We never sell or share 
                  user data. Your privacy is paramount.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-[#F5F6F8] border border-[#C7A96B]/10 rounded-sm">
                <AccordionTrigger className="px-6 hover:no-underline text-[#0D1B2A]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Will this always be free?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#88909B]">
                  The tester program is 100% free with no payment required. If we launch a commercial product in the future, 
                  early testers will receive advance notice and preferential pricing. There is zero obligation. You can leave 
                  the program anytime without consequence.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-[#F5F6F8] border border-[#C7A96B]/10 rounded-sm">
                <AccordionTrigger className="px-6 hover:no-underline text-[#0D1B2A]" style={{ fontFamily: 'var(--font-heading)' }}>
                  What are the risks of crypto trading?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#88909B]">
                  Cryptocurrency trading carries substantial risk of loss. Even with a 70% historical win rate, losses are 
                  inevitable. Markets can be highly volatile and unpredictable. Never trade with money you cannot afford to lose. 
                  Always use proper risk management, position sizing, and stop-losses. Past performance does not guarantee future results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-[#F5F6F8] border border-[#C7A96B]/10 rounded-sm">
                <AccordionTrigger className="px-6 hover:no-underline text-[#0D1B2A]" style={{ fontFamily: 'var(--font-heading)' }}>
                  How do I opt out?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#88909B]">
                  Simply leave the Telegram channel at any time. No explanation needed. No hard feelings. You can rejoin later 
                  if spots remain available. Your participation is entirely voluntary and can be terminated instantly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <motion.div variants={fadeInUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 bg-[#0D1B2A] border-l-2 border-[#C7A96B] p-8 rounded-sm">
              <h3 className="mb-4 text-white">Risk Disclosure</h3>
              <p className="text-[#88909B]" style={{ fontSize: '14px', lineHeight: '1.8' }}>
                <strong className="text-white">Trading involves substantial risk of loss.</strong> Crypto markets are highly 
                volatile and unpredictable. VOID signals are experimental and for educational purposes only. Not financial advice. 
                We are not registered investment advisors. Past performance does not guarantee future results. By joining the 
                tester program, you acknowledge sole responsibility for your trading decisions and accept all associated risks.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0D1B2A] to-[#1C2530]">
        <div className="container-custom">
          <motion.div variants={fadeInUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <h2 className="mb-8 text-white">Join the VOID Tester Program</h2>
            <p className="text-white/80 text-xl mb-10 leading-relaxed">
              Limited to 50 participants. Access institutional-grade crypto signals with full transparency. 
              No payment. No personal data collection. Opt out anytime.
            </p>
            <CustomButton 
              variant="gold"
              size="large"
              onClick={() => setJoinModalOpen(true)}
            >
              Join Free via Telegram
            </CustomButton>
            <p className="mt-6 text-white/50" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Week 1 • 50 Spots • No Credit Card Required
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1B2A] text-white py-16 border-t border-[#C7A96B]/10">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#1C2530] rounded-sm flex items-center justify-center border border-[#C7A96B]/20">
                  <span className="text-[#C7A96B]" style={{ fontSize: '18px', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    V
                  </span>
                </div>
                <span style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'var(--font-heading)', letterSpacing: '0.1em' }}>
                  VOID
                </span>
              </div>
              <p className="text-white/60" style={{ fontSize: '14px' }}>
                Institutional-grade crypto signals for serious traders.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-white" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Navigation
              </h3>
              <ul className="space-y-2" style={{ fontSize: '14px' }}>
                <li><a href="#signals" className="text-white/60 hover:text-[#C7A96B] transition-colors">Signals</a></li>
                <li><a href="#backtest" className="text-white/60 hover:text-[#C7A96B] transition-colors">Performance</a></li>
                <li><a href="#program" className="text-white/60 hover:text-[#C7A96B] transition-colors">Program</a></li>
                <li><a href="#about" className="text-white/60 hover:text-[#C7A96B] transition-colors">About</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-white" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Legal
              </h3>
              <ul className="space-y-2" style={{ fontSize: '14px' }}>
                <li><a href="#" className="text-white/60 hover:text-[#C7A96B] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#C7A96B] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#C7A96B] transition-colors">Risk Disclosure</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-white" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Contact
              </h3>
              <p className="text-white/60 mb-4" style={{ fontSize: '14px' }}>
                Questions about the tester program?
              </p>
              <a href="mailto:anantavidya110@gmail.com" className="text-[#C7A96B] hover:text-[#B89956] transition-colors" style={{ fontSize: '14px' }}>
                anantavidya110@gmail.com
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-[#C7A96B]/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/40" style={{ fontSize: '13px' }}>
                © 2024 VOID Trading Signals. Not financial advice. Trade at your own risk.
              </p>
              <p className="text-white/40" style={{ fontSize: '13px' }}>
                Crypto trading carries substantial risk of loss.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
