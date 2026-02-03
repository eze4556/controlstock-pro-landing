"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Star,
  Play,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Warehouse,
  ShoppingCart,
  BookOpen,
  Cloud,
  Factory,
  Utensils,
  Wrench,
  Store,
  Truck,
  FileText,
  MessageCircle,
  CalendarCheck,
  RefreshCw,
  Handshake,
  Headset,
  BarChart3,
  Lock,
  Mail,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function GestionProLanding() {
  const [showDemo, setShowDemo] = useState(false)
  const [currentDemoStep, setCurrentDemoStep] = useState(0)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-24 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center space-x-3" prefetch={false}>
            <Image src="/logonuevo.png" width={250} height={80} alt="Logo Gestión Pro" className="h-20 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#beneficios" className="text-gp-neutral-600 hover:text-gp-primary transition-colors">
              Beneficios
            </Link>
            <Link href="#caracteristicas" className="text-gp-neutral-600 hover:text-gp-primary transition-colors">
              Características
            </Link>
            <Link href="#precios" className="text-gp-neutral-600 hover:text-gp-primary transition-colors">
              Precios
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Link
              href="https://wa.me/3416171435?text=¡Hola!%20Me%20interesa%20GestiónPro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gp-primary hover:bg-gp-primary-700 text-white px-4 py-2 text-sm font-medium rounded-md transition-colors"
            >
              Prueba Gratis
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gp-primary-50 via-white to-gp-secondary-50 py-20 md:py-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
                <div className="space-y-4">

                  <h1 className="text-4xl font-bold tracking-tight text-gp-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl uppercase">
                    TODO TU NEGOCIO EN UNA SOLA PLATAFORMA
                  </h1>
                  <div className="mx-auto max-w-[700px] text-lg text-gp-neutral-600 lg:mx-0 md:text-xl space-y-2">
                    <p className="font-semibold text-gp-primary">
                      Inventarios · Ventas · Comprobantes · Catálogos
                    </p>
                    <p>
                      Gestión simple · Inteligente · Centralizada
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                    <Link
                      href="https://wa.me/3416171435?text=¡Hola!%20Me%20interesa%20comenzar%20la%20prueba%20gratis%20de%20GestiónPro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gp-primary hover:bg-gp-primary-700 text-white h-16 w-full sm:w-auto min-w-[240px] px-8 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Zap className="mr-2 h-5 w-5" />
                      👉 Empezá hoy mismo
                    </Link>
                    <Button
                      variant="outline"
                      onClick={() => setShowDemo(true)}
                      className="border-gp-primary text-gp-primary hover:bg-gp-primary hover:text-white h-16 w-full sm:w-auto min-w-[240px] px-8 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Ver Demo
                    </Button>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gp-neutral-600">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-gp-secondary" />
                      <span>Sin tarjeta de crédito</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-gp-secondary" />
                      <span>Configuración en 5 min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-gp-secondary" />
                      <span>Soporte 24/7</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gp-primary/20 to-gp-secondary/20 rounded-3xl blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <Image
                    src="/dashboard-hero.png"
                    width={800}
                    height={600}
                    alt="Dashboard de gestión de inventario en Gestión Pro Platform"
                    className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-20 bg-gp-neutral-50 border-y border-gp-neutral-200">
          <div className="container px-4 md:px-6">
            <h2 className="text-center text-base font-bold text-gp-neutral-500 uppercase tracking-widest mb-16">
              Empresas que confían en nuestra gestión
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {[
                "1729705753023.jfif",
                "617034117_4788527218040726_5117380683503077795_n.jpg",
                "7d933-250x250.jpg",
                "images.jfif",
                "logo-1456507262-1668522814-7d79597d3862ea29a60d937001284ecb1668522814-480-0.png",
                "nuevo.png"
              ].map((logo, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={`/confian/${logo}`}
                    alt={`Empresa cliente ${index + 1}`}
                    width={220}
                    height={120}
                    className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Beneficios Principales */}
        <section id="beneficios" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                GestionPro Platform
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-gp-neutral-900 sm:text-4xl md:text-5xl mb-4 uppercase">
                LA PLATAFORMA QUE CENTRALIZA LA GESTIÓN DE TU NEGOCIO
              </h2>
              <p className="mx-auto max-w-[800px] text-lg text-gp-neutral-600">
                Todo en un solo lugar, simple y ordenado
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gp-primary-100 group-hover:bg-gp-primary group-hover:text-white transition-all duration-300">
                    <Warehouse className="h-8 w-8 text-gp-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gp-neutral-900 mb-2">Inventarios</h3>
                  <p className="text-gp-neutral-600">Control total de tu stock</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gp-secondary-100 group-hover:bg-gp-secondary group-hover:text-white transition-all duration-300">
                    <FileText className="h-8 w-8 text-gp-secondary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gp-neutral-900 mb-2">Comprobantes</h3>
                  <p className="text-gp-neutral-600">Comprobantes internos al instante</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gp-accent-100 group-hover:bg-gp-accent group-hover:text-white transition-all duration-300">
                    <ShoppingCart className="h-8 w-8 text-gp-accent group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gp-neutral-900 mb-2">Ventas</h3>
                  <p className="text-gp-neutral-600">Gestiona tus ventas fácilmente</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gp-primary-100 group-hover:bg-gp-primary group-hover:text-white transition-all duration-300">
                    <Store className="h-8 w-8 text-gp-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gp-neutral-900 mb-2">Catálogos digitales</h3>
                  <p className="text-gp-neutral-600">Tu tienda online siempre abierta</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center">
              <Link
                href="https://wa.me/3416171435?text=¡Hola!%20Me%20interesa%20comenzar%20la%20prueba%20gratis%20de%20GestiónPro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gp-primary hover:bg-gp-primary-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="mr-2 h-5 w-5" />
                👉 EMPEZÁ A GESTIONAR MEJOR HOY
              </Link>
            </div>
          </div>
        </section>

        {/* Solución Integral */}
        <section id="caracteristicas" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gp-primary-600/85 to-gp-primary-500/85 backdrop-blur-lg px-6 py-16 md:px-16 md:py-24 text-center shadow-2xl">
              {/* Efectos de Fondo */}
              <div className="absolute top-0 left-0 -mt-20 -ml-20 h-96 w-96 rounded-full bg-gp-primary/20 blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute bottom-0 right-0 -mb-20 -mr-20 h-96 w-96 rounded-full bg-gp-secondary/20 blur-3xl opacity-30 animate-pulse delay-700"></div>

              <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                <div className="inline-block animate-fade-in-up">
                  <div className="inline-flex items-center rounded-full bg-white/10 px-6 py-2 backdrop-blur-sm border border-white/10 shadow-lg">
                    <span className="text-sm md:text-base font-bold text-rose-300 tracking-wide uppercase">
                      ¿CANSADO DE MANEJAR TODO POR SEPARADO?
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                    Gestión Pro Platform
                  </h3>
                  <p className="text-2xl md:text-3xl text-gp-primary-300 font-medium">
                    Gestión comercial inteligente para tu negocio
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 max-w-3xl mx-auto">
                  <p className="text-lg md:text-xl text-gp-neutral-300 leading-relaxed">
                    Controlá inventarios, ventas y comprobantes desde una sola plataforma
                    <br className="my-2 block" />
                    <span className="text-white font-semibold">Más orden, más control, menos complicaciones</span>
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="https://wa.me/3416171435?text=¡Hola!%20Me%20interesa%20comenzar%20la%20prueba%20gratis%20de%20GestiónPro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-gp-primary hover:bg-gp-neutral-100 h-16 px-10 text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:scale-105"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    COMENZÁ TU PRUEBA GRATIS HOY
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Precios */}
        <section id="precios" className="py-20 md:py-32 bg-gp-neutral-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Precios
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-gp-neutral-900 sm:text-4xl md:text-5xl mb-4">
                Plan Único Todo Incluido
              </h2>
              <p className="mx-auto max-w-[800px] text-lg text-gp-neutral-600">
                Accede a todas las funcionalidades de Gestión Pro Platform sin límites ni restricciones
              </p>
            </div>

            <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="w-full max-w-lg border-2 border-gp-primary shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                <CardHeader className="text-center pb-8 pt-8">
                  <div className="mb-4">
                    <Badge className="bg-gp-primary text-white px-4 py-1">Más Popular</Badge>
                  </div>
                  <CardTitle className="text-3xl font-bold text-gp-neutral-900 mb-2">Plan Integral</CardTitle>
                  <p className="text-gp-neutral-600">La plataforma completa para tu negocio</p>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="text-center mb-8">
                    <div className="flex flex-col items-center mb-4">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-gp-neutral-900">$25.000</span>
                        <span className="text-xl text-gp-neutral-600 ml-1">/mes</span>
                      </div>
                      <div className="mt-2">
                        <Badge className="bg-gp-accent text-white px-3 py-1 uppercase text-xs font-bold tracking-wider">
                          Precio de Lanzamiento
                        </Badge>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-gp-secondary">o $175.000/año (¡Ahorra 5 meses!)</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {[
                      "Todos los módulos incluidos",
                      "Usuarios ilimitados",
                      "Soporte prioritario 24/7",
                      "Backup automático diario",
                      "Actualizaciones gratuitas",
                      "Integración WhatsApp Business",
                      "Catálogo digital público",
                      "Reportes avanzados",
                      "Comprobantes digitales y tickets",
                      "Migración gratuita de datos",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-gp-secondary shrink-0" />
                        <span className="text-gp-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="https://wa.me/3416171435?text=¡Hola!%20Me%20interesa%20comenzar%20la%20prueba%20gratis%20de%20GestiónPro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-gp-primary hover:bg-gp-primary-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    👉 Comenzar Prueba Gratis
                  </Link>

                  <p className="text-center text-sm text-gp-neutral-500 mt-4 font-medium">
                    🔒 Precio congelado de por vida al suscribirte hoy
                  </p>
                  <p className="text-center text-xs text-gp-neutral-400 mt-1">
                    Sin tarjeta de crédito requerida • Cancela cuando quieras
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Garantías */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Garantías
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-gp-neutral-900 sm:text-4xl md:text-5xl mb-4">
                Nuestro Compromiso Contigo
              </h2>
              <p className="mx-auto max-w-[800px] text-lg text-gp-neutral-600">
                Estamos comprometidos con tu éxito y satisfacción total
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: CalendarCheck,
                  title: "Prueba Gratis 14 Días",
                  description: "Experimenta GestiónPro sin compromiso",
                },
                { icon: Shield, title: "Garantía de Satisfacción", description: "30 días o devolvemos tu dinero" },
                { icon: Headset, title: "Soporte Incluido", description: "Asistencia técnica sin costo adicional" },
                {
                  icon: Handshake,
                  title: "Migración Gratuita",
                  description: "Te ayudamos a migrar desde otros sistemas",
                },
              ].map((guarantee, index) => (
                <div key={index} className="text-center p-6 animate-fade-in" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gp-primary-100">
                    <guarantee.icon className="h-8 w-8 text-gp-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gp-neutral-900 mb-2">{guarantee.title}</h3>
                  <p className="text-gp-neutral-600 text-sm">{guarantee.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-32 bg-gp-neutral-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                FAQ
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-gp-neutral-900 sm:text-4xl md:text-5xl mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="mx-auto max-w-[800px] text-lg text-gp-neutral-600">
                Encuentra respuestas a las dudas más comunes sobre GestiónPro
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[
                {
                  question: "¿Necesito conocimientos técnicos para usar GestiónPro?",
                  answer:
                    "No, GestiónPro está diseñado para ser intuitivo y fácil de usar, incluso para personas sin experiencia técnica Ofrecemos tutoriales completos y soporte personalizado para ayudarte en cada paso",
                },
                {
                  question: "¿Puedo usar el sistema desde mi celular?",
                  answer:
                    "Sí, GestiónPro es 100% responsivo y accesible desde cualquier dispositivo con conexión a internet, incluyendo smartphones, tablets y computadoras",
                },
                {
                  question: "¿Qué pasa con mis datos si cancelo mi suscripción?",
                  answer:
                    "Puedes exportar todos tus datos en cualquier momento en formatos estándar Una vez que canceles, tus datos se mantendrán disponibles por 90 días antes de ser eliminados de forma segura",
                },
                {
                  question: "¿Puedo emitir comprobantes y tickets?",
                  answer:
                    "Sí, GestiónPro incluye un módulo completo de emisión de comprobantes internos y tickets que te permite entregar recibos a tus clientes de forma automática y profesional",
                },
                {
                  question: "¿Puedo personalizar el sistema?",
                  answer:
                    "Absolutamente GestiónPro ofrece múltiples opciones de personalización incluyendo campos personalizados, reportes adaptados, y configuraciones específicas para tu industria",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-gp-neutral-900 hover:text-gp-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gp-neutral-700 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-gp-primary to-gp-secondary text-white">
          <div className="container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-3xl space-y-8">
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                ¡Únete a más de 200 empresas exitosas!
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Comienza a transformar tu negocio hoy mismo
              </h2>
              <p className="text-xl text-white/90 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Únete a cientos de empresas que ya están revolucionando su gestión con Gestión Pro Platform Sin compromisos, sin
                complicaciones
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Link
                  href="https://wa.me/3416171435?text=¡Hola!%20Me%20interesa%20comenzar%20la%20prueba%20gratis%20de%20GestiónPro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-gp-primary hover:bg-gp-neutral-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  👉 Comenzar Prueba Gratis
                </Link>
              </div>
              <div className="flex items-center justify-center space-x-6 text-sm text-white/80 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Sin tarjeta de crédito</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Configuración en 5 min</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Soporte incluido</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Modal */}
        {showDemo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-7xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              {/* Header del Demo - Fijo */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b bg-gradient-to-r from-gp-primary to-gp-secondary text-white flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <Image src="/logonuevo.png" width={32} height={32} alt="Logo Gestión Pro" className="h-8 w-8" />
                  <h3 className="text-lg md:text-xl font-bold">Demo Interactivo - Gestión Pro</h3>
                </div>
                <button
                  onClick={() => setShowDemo(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Contenido del Demo - Scrolleable */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 md:p-8">
                  <div className="grid gap-6 lg:gap-8 xl:grid-cols-2">
                    {/* Panel de Control */}
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h4 className="text-xl md:text-2xl font-bold text-gp-neutral-900 mb-2">
                          Descubre cómo Gestión Pro Platform transforma tu negocio
                        </h4>
                        <p className="text-sm md:text-base text-gp-neutral-600">
                          Haz clic en cada módulo para ver cómo funciona
                        </p>
                      </div>

                      <div className="grid gap-3 md:gap-4 sm:grid-cols-2">
                        {[
                          {
                            id: 0,
                            icon: Warehouse,
                            title: "Inventario",
                            description: "Control automático de stock",
                            color: "gp-primary",
                          },
                          {
                            id: 1,
                            icon: ShoppingCart,
                            title: "Ventas",
                            description: "Proceso de venta en 3 clicks",
                            color: "gp-secondary",
                          },
                          {
                            id: 2,
                            icon: FileText,
                            title: "Comprobantes",
                            description: "Tickets automáticos",
                            color: "gp-accent",
                          },
                          {
                            id: 3,
                            icon: BarChart3,
                            title: "Reportes",
                            description: "Análisis en tiempo real",
                            color: "gp-primary",
                          },
                        ].map((module) => (
                          <button
                            key={module.id}
                            onClick={() => setCurrentDemoStep(module.id)}
                            className={`p-3 md:p-4 rounded-xl border-2 transition-all duration-300 text-left ${currentDemoStep === module.id
                              ? `border-${module.color} bg-${module.color}-50`
                              : "border-gp-neutral-200 hover:border-gp-neutral-300"
                              }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-lg bg-${module.color}-100`}>
                                <module.icon className={`h-4 w-4 md:h-5 md:w-5 text-${module.color}`} />
                              </div>
                              <div>
                                <h5 className="text-sm md:text-base font-semibold text-gp-neutral-900">
                                  {module.title}
                                </h5>
                                <p className="text-xs md:text-sm text-gp-neutral-600">{module.description}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Área de Demostración */}
                    <div className="bg-gp-neutral-50 rounded-xl p-4 md:p-6 min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                      {currentDemoStep === 0 && (
                        <div className="w-full space-y-4 animate-fade-in">
                          <h5 className="text-base md:text-lg font-bold text-gp-neutral-900 mb-4">
                            📦 Gestión de Inventario
                          </h5>
                          <div className="space-y-3">
                            <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm animate-slide-in">
                              <div className="flex items-center justify-between">
                                <span className="text-sm md:text-base font-medium">Producto A</span>
                                <span className="text-sm md:text-base text-gp-secondary font-bold">Stock: 25</span>
                              </div>
                              <div className="w-full bg-gp-neutral-200 rounded-full h-2 mt-2">
                                <div
                                  className="bg-gp-secondary h-2 rounded-full animate-pulse"
                                  style={{ width: "60%" }}
                                ></div>
                              </div>
                            </div>
                            <div
                              className="bg-white p-3 md:p-4 rounded-lg shadow-sm animate-slide-in"
                              style={{ animationDelay: "0.2s" }}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm md:text-base font-medium">Producto B</span>
                                <span className="text-sm md:text-base text-red-500 font-bold">Stock: 3 ⚠️</span>
                              </div>
                              <div className="w-full bg-gp-neutral-200 rounded-full h-2 mt-2">
                                <div
                                  className="bg-red-500 h-2 rounded-full animate-pulse"
                                  style={{ width: "15%" }}
                                ></div>
                              </div>
                            </div>
                            <div
                              className="bg-gp-primary-50 border border-gp-primary-200 p-3 rounded-lg animate-slide-in"
                              style={{ animationDelay: "0.4s" }}
                            >
                              <p className="text-xs md:text-sm text-gp-primary-800">
                                🔔 <strong>Alerta automática:</strong> Producto B necesita reposición
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentDemoStep === 1 && (
                        <div className="w-full space-y-4 animate-fade-in">
                          <h5 className="text-base md:text-lg font-bold text-gp-neutral-900 mb-4">
                            🛒 Proceso de Ventas
                          </h5>
                          <div className="space-y-3">
                            <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm animate-slide-in">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm md:text-base font-medium">1. Seleccionar producto</span>
                                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-gp-secondary" />
                              </div>
                              <div className="text-xs md:text-sm text-gp-neutral-600">Producto A - $15.000</div>
                            </div>
                            <div
                              className="bg-white p-3 md:p-4 rounded-lg shadow-sm animate-slide-in"
                              style={{ animationDelay: "0.3s" }}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm md:text-base font-medium">2. Confirmar cantidad</span>
                                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-gp-secondary" />
                              </div>
                              <div className="text-xs md:text-sm text-gp-neutral-600">Cantidad: 2 unidades</div>
                            </div>
                            <div
                              className="bg-white p-3 md:p-4 rounded-lg shadow-sm animate-slide-in"
                              style={{ animationDelay: "0.6s" }}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm md:text-base font-medium">3. Generar comprobante</span>
                                <div className="animate-spin h-4 w-4 md:h-5 md:w-5 border-2 border-gp-secondary border-t-transparent rounded-full"></div>
                              </div>
                              <div className="text-xs md:text-sm text-gp-neutral-600">Procesando</div>
                            </div>
                            <div
                              className="bg-gp-secondary-50 border border-gp-secondary-200 p-3 rounded-lg animate-slide-in"
                              style={{ animationDelay: "0.9s" }}
                            >
                              <p className="text-xs md:text-sm text-gp-secondary-800">
                                ✅ <strong>Venta completada:</strong> Total $30.000
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentDemoStep === 2 && (
                        <div className="w-full space-y-4 animate-fade-in">
                          <h5 className="text-base md:text-lg font-bold text-gp-neutral-900 mb-4">
                            📄 Emisión de Comprobantes
                          </h5>
                          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border animate-slide-in">
                            <div className="text-center mb-4">
                              <div className="inline-flex items-center space-x-2 text-gp-accent">
                                <FileText className="h-5 w-5 md:h-6 md:w-6" />
                                <span className="text-sm md:text-base font-bold">COMPROBANTE #001234</span>
                              </div>
                            </div>
                            <div className="space-y-2 text-xs md:text-sm">
                              <div className="flex justify-between">
                                <span>Cliente:</span>
                                <span className="font-medium">María González</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Fecha:</span>
                                <span className="font-medium">28/08/2025</span>
                              </div>
                              <div className="border-t pt-2 mt-2">
                                <div className="flex justify-between">
                                  <span>Producto A x2</span>
                                  <span>$30.000</span>
                                </div>
                                <div className="flex justify-between font-bold text-base md:text-lg mt-2">
                                  <span>Total:</span>
                                  <span>$30.000</span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                              <Button
                                size="sm"
                                className="flex-1 bg-gp-accent hover:bg-gp-accent-700 text-xs md:text-sm"
                              >
                                📧 Enviar por Email
                              </Button>
                              <Button size="sm" variant="outline" className="flex-1 bg-transparent text-xs md:text-sm">
                                📱 WhatsApp
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentDemoStep === 3 && (
                        <div className="w-full space-y-4 animate-fade-in">
                          <h5 className="text-base md:text-lg font-bold text-gp-neutral-900 mb-4">
                            📊 Reportes en Tiempo Real
                          </h5>
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm text-center animate-slide-in">
                                <div className="text-xl md:text-2xl font-bold text-gp-primary">$450K</div>
                                <div className="text-xs md:text-sm text-gp-neutral-600">Ventas del mes</div>
                                <div className="text-xs text-gp-secondary">↗️ +15%</div>
                              </div>
                              <div
                                className="bg-white p-3 md:p-4 rounded-lg shadow-sm text-center animate-slide-in"
                                style={{ animationDelay: "0.2s" }}
                              >
                                <div className="text-xl md:text-2xl font-bold text-gp-secondary">127</div>
                                <div className="text-xs md:text-sm text-gp-neutral-600">Productos vendidos</div>
                                <div className="text-xs text-gp-secondary">↗️ +8%</div>
                              </div>
                            </div>
                            <div
                              className="bg-white p-3 md:p-4 rounded-lg shadow-sm animate-slide-in"
                              style={{ animationDelay: "0.4s" }}
                            >
                              <div className="text-xs md:text-sm font-medium mb-2">Productos más vendidos</div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs md:text-sm">Producto A</span>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-16 md:w-20 bg-gp-neutral-200 rounded-full h-2">
                                      <div
                                        className="bg-gp-primary h-2 rounded-full animate-pulse"
                                        style={{ width: "80%" }}
                                      ></div>
                                    </div>
                                    <span className="text-xs">45</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-xs md:text-sm">Producto B</span>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-16 md:w-20 bg-gp-neutral-200 rounded-full h-2">
                                      <div
                                        className="bg-gp-secondary h-2 rounded-full animate-pulse"
                                        style={{ width: "60%" }}
                                      ></div>
                                    </div>
                                    <span className="text-xs">32</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer del Demo - Fijo */}
              <div className="flex-shrink-0 border-t bg-white p-4 md:p-6">
                <div className="text-center">
                  <p className="text-sm md:text-base text-gp-neutral-600 mb-4">
                    ¿Te gusta lo que ves? Comienza tu prueba gratuita ahora
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      href="https://wa.me/3416171435?text=¡Hola!%20Me%20interesa%20comenzar%20la%20prueba%20gratis%20de%20GestiónPro"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setShowDemo(false)}
                      className="inline-flex items-center justify-center bg-gp-primary hover:bg-gp-primary-700 text-white px-6 py-3 text-sm md:text-base font-medium rounded-md transition-colors"
                    >
                      <Zap className="mr-2 h-4 w-4" />
                      👉 Comenzar Prueba Gratis
                    </Link>
                    <Button variant="outline" onClick={() => setShowDemo(false)} className="text-sm md:text-base">
                      Cerrar Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Floating WhatsApp Button */}
        <Link
          href="https://wa.me/3416171435?text=¡Hola!%20Me%20interesa%20GestiónPro"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 animate-bounce-subtle"
          aria-label="Contactar por WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </Link>

        {/* Footer */}
        <footer className="border-t bg-gradient-to-br from-gp-neutral-100 via-gp-neutral-200 to-gp-neutral-300 text-gp-neutral-800">
          <div className="container px-4 md:px-6 py-12">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/logonuevo.png"
                    width={60}
                    height={60}
                    alt="Logo Gestión Pro"
                    className="h-16 w-auto"
                  />
                </div>
                <p className="text-gp-neutral-600 text-sm leading-relaxed">
                  La plataforma integral que revoluciona la gestión empresarial para pequeñas y medianas empresas
                </p>
                <div className="text-sm text-gp-neutral-600 space-y-1">
                  <p>gestionpro.pro</p>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:gestionproinfo@gmail.com" className="hover:text-gp-primary transition-colors">
                      gestionproinfo@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4" />
                    <a href="https://wa.me/3416171435" className="hover:text-gp-primary transition-colors">
                      +54 9 341 617-1435
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-gp-neutral-900">Producto</h3>
                <ul className="space-y-2 text-sm text-gp-neutral-600 mb-6">
                  <li>
                    <Link href="#caracteristicas" className="hover:text-gp-primary transition-colors">
                      Características
                    </Link>
                  </li>
                  <li>
                    <Link href="#precios" className="hover:text-gp-primary transition-colors">
                      Precios
                    </Link>
                  </li>
                </ul>

                <h4 className="font-semibold mb-2 text-gp-neutral-900 text-sm">API</h4>
                <p className="text-sm text-gp-neutral-600">
                  Para usar nuestra API en tu propio sistema contacta a{" "}
                  <a href="mailto:gestionproinfo@gmail.com" className="text-gp-primary hover:underline">
                    gestionproinfo@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-gp-neutral-900">Trabaja con nosotros</h3>
                <p className="text-sm text-gp-neutral-600">
                  ¿Te apasiona la tecnología y querés formar parte de nuestro equipo?
                  <br />
                  <br />
                  Envíanos tu CV y carta de presentación a{" "}
                  <a href="mailto:gestionproinfo@gmail.com?subject=Trabaja%20con%20nosotros" className="text-gp-primary hover:underline">
                    gestionproinfo@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="border-t border-gp-neutral-300 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-sm text-gp-neutral-600">© 2025 Gestión Pro Todos los derechos reservados</p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <Link href="#" className="text-sm text-gp-neutral-600 hover:text-gp-primary transition-colors">
                  Política de Privacidad
                </Link>
                <Link href="#" className="text-sm text-gp-neutral-600 hover:text-gp-primary transition-colors">
                  Términos de Servicio
                </Link>
                <Link href="#" className="text-sm text-gp-neutral-600 hover:text-gp-primary transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
