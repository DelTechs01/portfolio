import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap, Award, Calendar, MapPin, BookOpen, Star, CheckCircle2, Eye,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import PageHeader from '@/components/PageHeader';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const Education = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  useDocumentMeta({
    title: 'Education & Certifications',
    description:
      'Academic background and professional certifications in software development, blockchain, networking, and more.',
  });

  const degrees = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'Kirinyaga University (KyU)',
      location: 'Kutus, Kirinyaga',
      period: '2022 - 2026',
      gpa: '3.8/4.0',
      specialization: 'Software Engineering - Current',
      logo: 'https://www.kyu.ac.ke/images/kyu_logosmall2.png',
      achievements: [
        'Student Body President',
        'Hackathon Winner (3x)',
        'Outstanding Senior Award',
      ],
      coursework: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Database Systems',
        'Web Development',
        'Software Engineering',
        'Computer Networks',
      ],
    },
  ];

  const certifications = [
    {
      id: 1,
      name: 'Software Development February 2025 - Cohort VII',
      issuer: 'Power Learn Project',
      issuerLogo: 'https://academy.powerlearnprojectafrica.org/assets/logo.CAPAuQa5.png',
      category: 'Programming',
      issueDate: 'January 2024',
      shortDescription: 'Certified in MERN full-stack software development through the February 2025 Cohort VII Software Development program.',
      fullDescription: 'Successfully completed a 16-week program in Software Development covering Python, Web Technologies, Database Management, Startup Building & Employability and Software Engineering Essentials, with a specialization in Full-Stack Development MERN Stack.',
      message: 'Mastery of Full Stack Development(MERN).',
      imageUrl: '/delron Full-Stack Development MERN Stack certificate_page-0001.jpg',
    },
    {
      id: 2,
      name: 'Injective: The Layer 1 Blockchain Build For Finance',
      issuer: 'Binance Academy',
      issuerLogo: 'https://public.bnbstatic.com/static/academy/uploads/a3cd133a11cb4995908e34af5321be6b.png',
      category: 'Blockchain Technology',
      issueDate: 'December 15, 2025',
      shortDescription: 'Certified in building and understanding DeFi-focused applications on the Injective Layer 1 blockchain.',
      fullDescription: "An in-depth understanding of Injective's architecture, Web3 modules, INJ token, Community BuyBack, tokenization infrastructure, and performance metrics",
      message: 'Instructor : Brandon Goss - Head of Research at Injective',
      imageUrl: '/Injectictive-Layer1-Certificate_page-0001.jpg',
    },
    {
      id: 3,
      name: 'The fundamentals of crypto & blockchain',
      issuer: 'Binance Academy',
      issuerLogo: 'https://public.bnbstatic.com/static/academy/uploads/a3cd133a11cb4995908e34af5321be6b.png',
      category: 'Blockchain Technology',
      issueDate: 'December 17, 2025',
      shortDescription: 'Certified in blockchain fundamentals, including cryptocurrencies, DeFi, Web3, and investment basics.',
      fullDescription: 'The Beginner Track provided an introductory overview of the blockchain ecosystem and equiped me with the fundamental concepts needed to navigate the cryptocurrency space. This course encompassed a series of modules focusing on the basics of blockchain technology, cryptocurrencies, decentralized finance (DeFi), Web3, and trading and investing strategies.',
      message: 'Beginner-level understanding of the blockchain ecosystem.',
      imageUrl: '/beginer-track-blockchain-NFT-Award.jpeg',
    },
    {
      id: 4,
      name: 'Python And Flask Framework Complete Course',
      issuer: 'Udemy',
      issuerLogo: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
      category: 'Programming',
      issueDate: 'August 2024',
      shortDescription: 'Certified in Python programming and Flask framework development for building secure, scalable web applications.',
      fullDescription: 'This certificate above verifies that Kweyu Delron successfully completed the course Python And Flask Framework Complete Course on 11/08/2024 as taught by Horizon Tech on Udemy. The certificate indicates the entire course was completed as validated by the student. The course duration represents the total video hours of the course at time of most recent completion.',
      message: 'Python drives intelligent automation and data-driven software solutions.',
      imageUrl: '/Udemy-Flask-Certificate.jpg',
    },
    {
      id: 5,
      name: 'Getting Started with Cisco Packet Tracer',
      issuer: 'Cisco Networking Academy',
      issuerLogo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg',
      category: 'Networking',
      issueDate: 'August 2024',
      shortDescription: 'Certified in building, configuring, and simulating networks using Cisco Packet Tracer.',
      fullDescription: 'Successfully completed the "Getting Started with Cisco Packet Tracer" course offered by the Cisco Networking Academy, covering the fundamentals of designing, configuring, and simulating networks with Packet Tracer. Cert ID: 73ce4bd4-2aaf-423b-98aa-a39c11105ca5.',
      message: 'Hands-on network design and simulation with industry-standard tools.',
      imageUrl: '/Getting_Started_with_Cisco_Packet_Tracer_certificate_kweyudelron37-gmail-com_73ce4bd4-2aaf-423b-98aa-a39c11105ca5.pdf',
    },
  ];

  const categories = ['all', ...Array.from(new Set(certifications.map((c) => c.category)))];

  const filteredCertifications = selectedCategory === 'all'
    ? certifications
    : certifications.filter((cert) => cert.category === selectedCategory);

  const stats = [
    { label: 'Degrees', value: degrees.length, icon: GraduationCap },
    { label: 'Certifications', value: certifications.length, icon: Award },
    { label: 'Years learning (ongoing)', value: '4+', icon: BookOpen },
    { label: 'Specializations', value: categories.length - 1, icon: Star },
  ];

  const timelineItems = [
    ...degrees.map((d) => ({ ...d, type: 'degree' as const, sortYear: parseInt(d.period.split(' - ')[1], 10) })),
    ...certifications.map((c) => ({ ...c, type: 'cert' as const, sortYear: parseInt((c.issueDate.match(/\d{4}/) ?? ['0'])[0], 10) })),
  ].sort((a, b) => b.sortYear - a.sortYear);

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        eyebrow="// education"
        title="Education & certifications"
        subtitle="Grounded in Software Engineering, my learning spans AI, cybersecurity, ethical hacking, blockchain, and network engineering, through rigorous coursework and hands-on system and network builds."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="border-border bg-card/60">
                <CardContent className="p-5">
                  <stat.icon className="w-5 h-5 text-primary mb-3" />
                  <p className="text-2xl font-bold leading-none">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wide">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </PageHeader>

      {/* Academic Qualifications */}
      <section className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Academic qualifications</h2>
          </div>

          <div className="space-y-8">
            {degrees.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-border transition-colors">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-xl overflow-hidden border border-border shadow-sm bg-white p-3">
                          <img
                            src={edu.logo}
                            alt={`${edu.institution} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="flex-1 space-y-5">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{edu.degree}</h3>
                          <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4" />
                              <span>{edu.institution}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Badge variant="secondary" className="px-3 py-1">
                            <Star className="w-3 h-3 mr-1.5" />
                            GPA: {edu.gpa}
                          </Badge>
                          <Badge variant="secondary" className="px-3 py-1">{edu.specialization}</Badge>
                        </div>

                        <Tabs defaultValue="achievements" className="w-full mt-2">
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="achievements">Achievements</TabsTrigger>
                            <TabsTrigger value="coursework">Coursework</TabsTrigger>
                          </TabsList>

                          <TabsContent value="achievements" className="mt-5">
                            <ul className="grid md:grid-cols-2 gap-3">
                              {edu.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </TabsContent>

                          <TabsContent value="coursework" className="mt-5">
                            <div className="flex flex-wrap gap-2">
                              {edu.coursework.map((course, i) => (
                                <Badge key={i} variant="outline" className="px-3 py-1 text-sm">{course}</Badge>
                              ))}
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-24 bg-card/40 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Professional certifications</h2>
            </div>
            <Badge variant="outline" className="px-3 py-1 text-sm font-medium">
              {certifications.length} Active
            </Badge>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                className="rounded-full capitalize"
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All' : category}
                {category !== 'all' && (
                  <Badge variant="secondary" className="ml-2 px-2 py-0.5 text-xs">
                    {certifications.filter((c) => c.category === category).length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="h-full flex flex-col border-border bg-background hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="secondary">{cert.category}</Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{cert.name}</CardTitle>
                    <CardDescription className="mt-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full overflow-hidden border flex-shrink-0">
                        <img src={cert.issuerLogo} alt={cert.issuer} className="w-full h-full object-contain" />
                      </span>
                      <span>{cert.issuer}</span>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.shortDescription}
                    </p>

                    <div className="mt-6">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full">
                            <Eye className="w-4 h-4 mr-2" />
                            View Certificate
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0 overflow-hidden">
                          <div className="relative bg-muted">
                            {cert.imageUrl.toLowerCase().endsWith('.pdf') ? (
                              <iframe
                                src={cert.imageUrl}
                                title={`${cert.name} Certificate`}
                                className="w-full h-[70vh]"
                              />
                            ) : (
                              <img
                                src={cert.imageUrl}
                                alt={`${cert.name} Certificate`}
                                className="w-full h-auto"
                              />
                            )}
                          </div>
                          <div className="p-8 space-y-6 bg-background">
                            <DialogHeader>
                              <DialogTitle className="text-2xl">{cert.name}</DialogTitle>
                              <DialogDescription className="text-base">
                                Issued by <span className="font-semibold">{cert.issuer}</span> in {cert.issueDate}
                              </DialogDescription>
                            </DialogHeader>

                            <div className="space-y-4">
                              <p className="text-muted-foreground leading-relaxed">
                                {cert.fullDescription}
                              </p>
                              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80">
                                "{cert.message}"
                              </blockquote>
                            </div>

                            <div className="flex gap-3 pt-2">
                              <Button variant="secondary" className="flex-1" asChild>
                                <a
                                  href={cert.imageUrl}
                                  download={`${cert.name.replace(/\s+/g, '_')}${cert.imageUrl.slice(cert.imageUrl.lastIndexOf('.'))}`}
                                >
                                  Download Certificate
                                </a>
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Timeline */}
      <section className="py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 tracking-tight">
            Educational timeline
          </h2>

          <ol className="relative ml-2 border-l border-border">
            {timelineItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.25) }}
                className="relative pb-10 pl-8 last:pb-0"
              >
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-1.5 size-[9px] rounded-full bg-primary ring-4 ring-background"
                />
                <p className="label-mono mb-2 flex items-center gap-2">
                  {item.type === 'degree' ? <GraduationCap className="w-3.5 h-3.5" /> : <Award className="w-3.5 h-3.5" />}
                  {item.type === 'degree' ? item.period : item.issueDate}
                </p>
                <h3 className="text-lg font-medium tracking-tight">
                  {item.type === 'degree' ? item.degree : item.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.type === 'degree' ? item.institution : item.issuer}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Education;
