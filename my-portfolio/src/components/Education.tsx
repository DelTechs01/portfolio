import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Award, Calendar, MapPin, BookOpen, 
  ChevronLeft, Trophy, Star, CheckCircle2, Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface EducationProps {
  onBack: () => void;
}

const Education = ({ onBack }: EducationProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const degrees = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'Kirinyaga University {KyU}',
      location: 'Kirinyaga, Kutus',
      period: '2022 - 2026',
      gpa: '3.8/4.0',
      specialization: 'Software Engineering - Current',
      logo: 'https://www.kyu.ac.ke/images/kyu_logosmall2.png',
      achievements: [
        'Student Body President',
        'Hackathon Winner (3x)',
        'Outstanding Senior Award'
      ],
      coursework: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Database Systems',
        'Web Development',
        'Software Engineering',
        'Computer Networks'
      ]
    }
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
      imageUrl: '/public/delron Full-Stack Development MERN Stack certificate_page-0001.jpg'
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
      imageUrl: '/public/Injectictive-Layer1-Certificate_page-0001.jpg'
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
      imageUrl: '/public/beginer-track-blockchain-NFT-Award.jpeg'
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
      imageUrl: '/public/Udemy-Flask-Certificate.jpg'
    },
    {
      id: 5,
      name: 'TensorFlow Developer Certificate',
      issuer: 'Google & TensorFlow',
      issuerLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1280px-Tensorflow_logo.svg.png',
      category: 'AI/ML',
      issueDate: 'November 2023',
      shortDescription: 'Proficient in building production-ready ML models with TensorFlow.',
      fullDescription: 'Validates hands-on experience in image classification, NLP, time series, and model deployment.',
      message: 'Committed to shaping the future with AI.',
      imageUrl: 'https://placehold.co/1200x800/FF6F00/ffffff/png?text=TensorFlow+Developer+Certificate&font=montserrat'
    },
    {
      id: 6,
      name: 'AI & Machine Learning Specialization',
      issuer: 'Coursera (Stanford University)',
      issuerLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Coursera_logo.svg/1200px-Coursera_logo.svg.png',
      category: 'AI/ML',
      issueDate: 'August 2022',
      shortDescription: 'Comprehensive coverage of ML fundamentals to advanced topics.',
      fullDescription: 'Andrew Ng\'s renowned specialization covering supervised/unsupervised learning, deep learning, and best practices.',
      message: 'Strong foundational knowledge driving practical AI solutions.',
      imageUrl: 'https://placehold.co/1200x800/0066FF/ffffff/png?text=Coursera+Machine+Learning+Specialization&font=montserrat'
    },
    {
      id: 7,
      name: 'Professional Scrum Master I (PSM I)',
      issuer: 'Scrum.org',
      issuerLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Scrum_Alliance_logo.svg/1200px-Scrum_Alliance_logo.svg.png',
      category: 'Development',
      issueDate: 'April 2023',
      shortDescription: 'Mastery of the Scrum framework and agile principles.',
      fullDescription: 'Certified understanding of Scrum roles, events, and artifacts.',
      message: 'Delivering value iteratively with high-performing teams.',
      imageUrl: 'https://placehold.co/1200x800/ffffff/000000/png?text=Professional+Scrum+Master+I&font=montserrat'
    },
    {
      id: 8,
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      issuerLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1280px-MongoDB_Logo.svg.png',
      category: 'Development',
      issueDate: 'February 2023',
      shortDescription: 'Expert in MongoDB database development and design.',
      fullDescription: 'Proficiency in NoSQL concepts, aggregation framework, and schema design.',
      message: 'Building flexible, scalable data layers for modern applications.',
      imageUrl: 'https://placehold.co/1200x800/47A248/ffffff/png?text=MongoDB+Certified+Developer&font=montserrat'
    }
  ];

  const categories = ['all', 'Programming','Cloud', 'Security', 'AI/ML', 'Development', 'Blockchain Technology'] as const;

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const stats = [
    { label: 'Degrees', value: degrees.length, icon: GraduationCap },
    { label: 'Certifications', value: certifications.length, icon: Award },
    { label: 'Years Learning', value: '3+', icon: BookOpen },
    { label: 'Publications', value: '2', icon: Star }
  ];

  const timelineItems = [
    ...degrees.map(d => ({ ...d, type: 'degree' as const, sortYear: parseInt(d.period.split(' - ')[1], 10) })),
    ...certifications.map(c => ({ ...c, type: 'cert' as const, sortYear: parseInt(c.issueDate.split(' ')[1], 10) }))
  ].sort((a, b) => b.sortYear - a.sortYear);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 border-b border-border backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Education & Certifications</h1>
              <p className="text-sm text-muted-foreground">Academic background and professional qualifications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium">
              <Trophy className="w-4 h-4 mr-2" />
              Lifelong Learner
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Pursuing Excellence Through
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> Continuous Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Grounded in Software Engineering, my academic journey spans artificial intelligence, cybersecurity, ethical hacking, blockchain technologies, and network engineering. I continuously strengthen my skills through rigorous coursework, hands-on system development, and practical network installation experience, with a strong focus on building secure, scalable, and future-ready digital solutions.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Qualifications Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Academic Qualifications</h2>
          </div>

          <div className="space-y-12">
            {degrees.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-muted/30 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 rounded-xl overflow-hidden border border-border shadow-sm bg-white p-4">
                          <img 
                            src={edu.logo} 
                            alt={`${edu.institution} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="flex-1 space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-3 tracking-tight">{edu.degree}</h3>
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

                        <Tabs defaultValue="achievements" className="w-full mt-4">
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="achievements">Achievements</TabsTrigger>
                            <TabsTrigger value="coursework">Coursework</TabsTrigger>
                          </TabsList>

                          <TabsContent value="achievements" className="mt-6">
                            <ul className="grid md:grid-cols-2 gap-3">
                              {edu.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </TabsContent>

                          <TabsContent value="coursework" className="mt-6">
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

      {/* Certifications Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Professional Certifications</h2>
            </div>
            <Badge variant="outline" className="px-3 py-1 text-sm font-medium">
              {certifications.length} Active
            </Badge>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
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
                    {certifications.filter(c => c.category === category).length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary">{cert.category}</Badge>
                    </div>
                    <CardTitle className="text-xl leading-tight">{cert.name}</CardTitle>
                    <CardDescription className="mt-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full overflow-hidden border">
                        <img src={cert.issuerLogo} alt={cert.issuer} className="w-full h-full object-contain" />
                      </div>
                      <span>{cert.issuer}</span>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.shortDescription}
                    </p>

                    <div className="mt-8">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="default" className="w-full">
                            <Eye className="w-4 h-4 mr-2" />
                            View Certificate
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0 overflow-hidden">
                          <div className="relative">
                            <img 
                              src={cert.imageUrl} 
                              alt={`${cert.name} Certificate`}
                              className="w-full h-auto"
                            />
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

                            <div className="flex gap-3 pt-4">
                              <Button variant="secondary" className="flex-1" asChild>
                                <a href={cert.imageUrl} download={`${cert.name.replace(/\s+/g, '_')}.png`}>
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
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center tracking-tight">Educational Timeline</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border/50 rounded-full" />
            
            <div className="space-y-16">
              {timelineItems.map((item, index) => {
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                      <Card className="inline-block max-w-md border-none shadow-sm hover:shadow-md transition-shadow bg-muted/30 backdrop-blur-sm">
                        <CardContent className="p-4">
                          <Badge variant="secondary" className="mb-2 px-3 py-1 text-xs">
                            {item.type === 'degree' ? <GraduationCap className="w-3 h-3 mr-1" /> : <Award className="w-3 h-3 mr-1" />}
                            {item.type === 'degree' ? item.period : item.issueDate}
                          </Badge>
                          <h4 className="font-bold text-lg mb-1">
                            {item.type === 'degree' ? item.degree : item.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {item.type === 'degree' ? item.institution : item.issuer}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-5 h-5 rounded-full bg-primary border-4 border-background shadow-md" />
                    </div>
                    
                    <div className="flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;