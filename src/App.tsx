/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Rocket, 
  Gamepad2, 
  Trophy, 
  Monitor, 
  Volume2, 
  Mic, 
  Eye, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronRight,
  UserCircle2,
  Map,
  Star,
  Smartphone,
  Tablet,
  Laptop
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <header className="relative bg-pizza-red text-white py-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 rotate-12"><Gamepad2 size={120} /></div>
          <div className="absolute bottom-10 right-10 -rotate-12"><Star size={120} /></div>
        </div>
        
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <Badge className="mb-4 bg-pizza-yellow text-pizza-red hover:bg-pizza-yellow font-bold px-4 py-1 text-sm uppercase tracking-wider">
            Speech Adventure
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
            PIZZA POWER UP
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">
            親愛的家長您好：為了提升孩子的口說自信與發音準確度，<span className="text-pizza-yellow font-bold">Tr. Penny</span> 特別創作了 Speech Adventure 互動軟體。在展開這場聲音冒險前，請您參考這份清單，陪伴孩子一起挑戰！
          </p>
        </motion.div>
      </header>

      <main className="max-w-5xl mx-auto px-6 -mt-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Step 1: Preparation */}
          <motion.section variants={itemVariants}>
            <Card className="game-card border-l-8 border-l-pizza-orange">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-pizza-orange/10 rounded-2xl">
                  <Rocket className="text-pizza-orange w-8 h-8" />
                </div>
                <div>
                  <CardTitle className="text-2xl">🚀 冒險第一步：行前準備</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                  <p className="text-lg font-bold text-pizza-orange mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> 最重要的一件事
                  </p>
                  <p className="text-xl font-semibold text-slate-800">
                    請孩子在練習前「務必背熟演講稿」。
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4">
                  <div className="mt-1 p-1 bg-blue-100 rounded-full">
                    <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-700">💡 建議做法：</p>
                    <p className="text-slate-600">背誦給爸爸媽媽聽，或先用手機錄影自我比對。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Step 2: Software Tutorial */}
          <motion.section variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Gamepad2 className="text-pizza-red w-8 h-8" />
              <h2 className="text-3xl font-black text-slate-800">🎮 軟體操作教學</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <Card className="game-card">
                <CardHeader>
                  <div className="step-number mb-4">1</div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <UserCircle2 className="w-5 h-5 text-pizza-red" /> 選擇英雄角色
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 space-y-2">
                  <p><span className="font-bold text-slate-800">登入首頁：</span>點擊孩子專屬的角色頭像（如 Sophia, Linus 等）。</p>
                  <p><span className="font-bold text-slate-800">專屬主題：</span>每個角色對應不同的演講主題（如：空汙、流浪動物）。</p>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="game-card">
                <CardHeader>
                  <div className="step-number mb-4">2</div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Map className="w-5 h-5 text-pizza-red" /> 探索冒險地圖
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 space-y-2">
                  <p><span className="font-bold text-slate-800">進度分段：</span>選擇要練習的段落 (Part)。</p>
                  <p><span className="font-bold text-slate-800">挑戰分級：</span></p>
                  <ul className="list-disc list-inside pl-2 space-y-1">
                    <li>Level 1–3：一般口說練習</li>
                    <li>Level 4：終極進階挑戰</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="game-card md:col-span-1">
                <CardHeader>
                  <div className="step-number mb-4">3</div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Star className="w-5 h-5 text-pizza-red" /> 核心口說練習
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-pizza-red/10 text-pizza-red border-none mb-4">三字訣：聽、錄、看</Badge>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Volume2 className="w-5 h-5 text-pizza-orange shrink-0" />
                      <div>
                        <p className="font-bold text-slate-800">聽 (Listen)</p>
                        <p className="text-sm text-slate-600">電腦版：高品質語音即點即播。行動裝置：啟動 AI 真人語音，Pizza 老師會現身提醒背誦。</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Mic className="w-5 h-5 text-pizza-red shrink-0" />
                      <div>
                        <p className="font-bold text-slate-800">錄 (Record)</p>
                        <p className="text-sm text-slate-600">能量球隨聲音跳動，再次點擊即可停止。</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Eye className="w-5 h-5 text-adventure-blue shrink-0" />
                      <div>
                        <p className="font-bold text-slate-800">看 (Result)</p>
                        <p className="text-sm text-slate-600">系統即時評分，通過後進度自動升級！</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Bonus Missions */}
          <motion.section variants={itemVariants}>
            <Card className="game-card bg-slate-900 text-white border-none overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pizza-yellow/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-pizza-yellow rounded-2xl">
                  <Trophy className="text-slate-900 w-8 h-8" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-pizza-yellow">🏆 BONUS：大師級加分任務</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 mb-6">挑戰成功後，請引導孩子完成以下進階任務，鞏固學習成效：</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "看影片", desc: "觀看 Tr. Lee 錄製的 Loom 教學影片", icon: <Monitor className="w-5 h-5" /> },
                    { title: "找動作", desc: "在紙本稿上用螢光筆畫出 3 個要模仿的肢體動作", icon: <UserCircle2 className="w-5 h-5" /> },
                    { title: "錄影片", desc: "不看稿完成 Part 1 演講並錄製影片", icon: <Mic className="w-5 h-5" /> },
                    { title: "傳雲端", desc: "將錄影上傳至指定 Drive 供老師審核", icon: <Rocket className="w-5 h-5" /> },
                  ].map((task, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-pizza-yellow">{task.icon}</div>
                      <div>
                        <p className="font-bold text-white">{task.title}</p>
                        <p className="text-xs text-slate-400">{task.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Device Guide */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="text-adventure-blue w-8 h-8" />
              <h2 className="text-3xl font-black text-slate-800">💻 設備與瀏覽器建議指南</h2>
            </div>
            
            <Card className="game-card overflow-hidden">
              <Table>
                <TableHeader className="bg-slate-50">
                  <TableRow>
                    <TableHead className="w-[100px]">優先順序</TableHead>
                    <TableHead>建議平台</TableHead>
                    <TableHead>推薦瀏覽器</TableHead>
                    <TableHead className="hidden md:table-cell">優點評估</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold text-pizza-orange">🥇 首選</TableCell>
                    <TableCell className="flex items-center gap-2"><Laptop className="w-4 h-4" /> 電腦版 (PC/Mac)</TableCell>
                    <TableCell>Chrome / Edge</TableCell>
                    <TableCell className="hidden md:table-cell text-slate-600">反應最快、辨識最穩、音質最佳。</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-slate-400">🥈 次選</TableCell>
                    <TableCell className="flex items-center gap-2"><Tablet className="w-4 h-4" /> 平板電腦 (iPad)</TableCell>
                    <TableCell>Safari / Chrome</TableCell>
                    <TableCell className="hidden md:table-cell text-slate-600">適合手持，已自動優化 AI 真人語音。</TableCell>
                  </TableRow>
                  <TableRow className="bg-red-50/50">
                    <TableCell className="font-bold text-red-500">❌ 不建議</TableCell>
                    <TableCell className="flex items-center gap-2"><Smartphone className="w-4 h-4" /> 手機 (iOS/Android)</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell className="hidden md:table-cell text-slate-600">螢幕過小，難以辨識語調標記且易誤觸。</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </motion.section>

          {/* Footer Warning */}
          <motion.section variants={itemVariants}>
            <div className="bg-pizza-yellow/20 border-2 border-pizza-yellow rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="bg-pizza-yellow p-4 rounded-2xl shadow-lg">
                <AlertTriangle className="text-slate-900 w-10 h-10" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-black mb-2 text-slate-800">⚠️ 小提醒</h3>
                <p className="text-slate-700 leading-relaxed">
                  使用 iPad 初次錄音時，請務必點擊<span className="font-bold text-pizza-red">「允許」</span>麥克風使用權限，冒險才能順利進行喔！
                </p>
              </div>
              <div className="shrink-0">
                <a 
                  href="https://green89772-bit.github.io/Pizza-Power-Up/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-pizza-red text-white font-black px-8 py-4 rounded-2xl shadow-[0_4px_0_0_#991b1b] active:translate-y-1 active:shadow-none transition-all"
                >
                  前往冒險 <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.section>

          <footer className="text-center text-slate-400 pt-10">
            <p className="text-lg font-bold text-slate-600 mb-2">讓我們一起見證孩子在 Speech Adventure 中的成長！</p>
            <p>如有任何操作問題，歡迎隨時詢問。</p>
          </footer>
        </motion.div>
      </main>
    </div>
  );
}
