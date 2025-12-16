import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Award, Calendar, MapPin, BookOpen, 
  ChevronLeft, ExternalLink, Download, CheckCircle2, 
  Trophy, Star, Code2, Brain, Shield, Cloud, Terminal as TerminalIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Terminal from '@/components/Terminal';
import { useLocation } from 'wouter';

interface EducationProps {
  onBack: () => void;
}

const Education = ({ onBack }: EducationProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [, setLocation] = useLocation();

  const degrees = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      period: '2016 - 2018',
      gpa: '3.9/4.0',
      specialization: 'Artificial Intelligence & Machine Learning',
      logo: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=100&q=80',
      achievements: [
        'Graduated with Honors',
        'Research Assistant in AI Lab',
        'Published 2 papers on Neural Networks',
        'Dean\'s List all semesters'
      ],
      coursework: [
        'Deep Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Advanced Algorithms',
        'Distributed Systems',
        'Machine Learning Theory'
      ],
      thesis: {
        title: 'Optimizing Neural Network Architectures for Real-Time Applications',
        advisor: 'Dr. Jane Smith',
        abstract: 'Research on efficient neural network compression techniques for edge computing.'
      }
    },
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'MIT',
      location: 'Cambridge, MA',
      period: '2012 - 2016',
      gpa: '3.8/4.0',
      specialization: 'Software Engineering',
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&q=80',
      achievements: [
        'Summa Cum Laude',
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
      name: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      issuerLogo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&q=80',
      category: 'Cloud',
      issueDate: 'January 2024',
      expiryDate: 'January 2027',
      credentialId: 'AWS-PSA-2024-001234',
      verifyUrl: 'https://aws.amazon.com/verification',
      skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Infrastructure'],
      description: 'Advanced certification demonstrating expertise in designing distributed systems on AWS.',
      icon: Cloud
    },
    {
      id: 2,
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      issuerLogo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&q=80',
      category: 'Cloud',
      issueDate: 'March 2023',
      expiryDate: 'March 2026',
      credentialId: 'AWS-DEV-2023-005678',
      verifyUrl: 'https://aws.amazon.com/verification',
      skills: ['AWS', 'Lambda', 'DynamoDB', 'API Gateway'],
      description: 'Demonstrates proficiency in developing and maintaining AWS applications.',
      icon: Cloud
    },
    {
      id: 3,
      name: 'Google Cloud Professional Cloud Architect',
      issuer: 'Google Cloud',
      issuerLogo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&q=80',
      category: 'Cloud',
      issueDate: 'June 2023',
      expiryDate: 'June 2025',
      credentialId: 'GCP-PCA-2023-987654',
      verifyUrl: 'https://cloud.google.com/verify',
      skills: ['GCP', 'Kubernetes', 'Cloud Security', 'BigQuery'],
      description: 'Expert-level certification for designing and managing Google Cloud solutions.',
      icon: Cloud
    },
    {
      id: 4,
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      issuerLogo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=100&q=80',
      category: 'Security',
      issueDate: 'September 2022',
      expiryDate: 'September 2025',
      credentialId: 'CEH-2022-456789',
      verifyUrl: 'https://www.eccouncil.org/verify',
      skills: ['Penetration Testing', 'Network Security', 'Vulnerability Assessment'],
      description: 'Certified to identify and address security vulnerabilities ethically.',
      icon: Shield
    },
    {
      id: 5,
      name: 'TensorFlow Developer Certificate',
      issuer: 'Google & TensorFlow',
      issuerLogo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&q=80',
      category: 'AI/ML',
      issueDate: 'November 2023',
      expiryDate: 'November 2026',
      credentialId: 'TF-DEV-2023-112233',
      verifyUrl: 'https://www.tensorflow.org/certificate',
      skills: ['TensorFlow', 'Deep Learning', 'Neural Networks', 'Model Training'],
      description: 'Demonstrates proficiency in building and training ML models using TensorFlow.',
      icon: Brain
    },
    {
      id: 6,
      name: 'AI & Machine Learning Specialization',
      issuer: 'Coursera (Stanford University)',
      issuerLogo: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=100&q=80',
      category: 'AI/ML',
      issueDate: 'August 2022',
      expiryDate: 'Lifetime',
      credentialId: 'COURSERA-ML-2022-445566',
      verifyUrl: 'https://www.coursera.org/verify',
      skills: ['Machine Learning', 'Python', 'Data Science', 'Supervised Learning'],
      description: 'Comprehensive specialization covering ML fundamentals to advanced topics.',
      icon: Brain
    },
    {
      id: 7,
      name: 'Professional Scrum Master I (PSM I)',
      issuer: 'Scrum.org',
      issuerLogo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&q=80',
      category: 'Development',
      issueDate: 'April 2023',
      expiryDate: 'Lifetime',
      credentialId: 'PSM-I-2023-778899',
      verifyUrl: 'https://www.scrum.org/verify',
      skills: ['Agile', 'Scrum', 'Team Leadership', 'Project Management'],
      description: 'Certified Scrum Master demonstrating mastery of Scrum framework.',
      icon: Code2
    },
    {
      id: 8,
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      issuerLogo: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=100&q=80',
      category: 'Development',
      issueDate: 'February 2023',
      expiryDate: 'February 2026',
      credentialId: 'MONGO-DEV-2023-334455',
      verifyUrl: 'https://university.mongodb.com/verify',
      skills: ['MongoDB', 'NoSQL', 'Database Design', 'Aggregation'],
      description: 'Expert certification in MongoDB database development and administration.',
      icon: Code2
    }
  ];

  const categories = ['all', 'Cloud', 'Security', 'AI/ML', 'Development'];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const stats = [
    { label: 'Degrees', value: degrees.length, icon: GraduationCap },
    { label: 'Certifications', value: certifications.length, icon: Award },
    { label: 'Years Learning', value: '12+', icon: BookOpen },
    { label: 'Publications', value: '2', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 glass border-b border-border backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Education & Certifications</h1>
              <p className="text-sm text-muted-foreground">Academic journey and professional credentials</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge className="mb-4 px-4 py-1.5">
              <Trophy className="w-4 h-4 mr-2 inline" />
              Continuous Learner
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Building Expertise Through
              <span className="gradient-text"> Lifelong Learning</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Committed to staying at the forefront of technology through continuous education and certification
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
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Academic Education</h2>
          </div>

          <div className="space-y-8">
            {degrees.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Institution Logo */}
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-primary/20">
                          <img 
                            src={edu.logo} 
                            alt={edu.institution}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                          <div className="flex flex-wrap gap-4 text-muted-foreground">
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
                          <Badge variant="secondary">
                            <Star className="w-3 h-3 mr-1" />
                            GPA: {edu.gpa}
                          </Badge>
                          <Badge variant="secondary">{edu.specialization}</Badge>
                        </div>

                        <Tabs defaultValue="achievements" className="w-full">
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="achievements">Achievements</TabsTrigger>
                            <TabsTrigger value="coursework">Coursework</TabsTrigger>
                            {edu.thesis && <TabsTrigger value="thesis">Thesis</TabsTrigger>}
                          </TabsList>

                          <TabsContent value="achievements" className="mt-4">
                            <ul className="grid md:grid-cols-2 gap-2">
                              {edu.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </TabsContent>

                          <TabsContent value="coursework" className="mt-4">
                            <div className="flex flex-wrap gap-2">
                              {edu.coursework.map((course, i) => (
                                <Badge key={i} variant="outline">{course}</Badge>
                              ))}
                            </div>
                          </TabsContent>

                          {edu.thesis && (
                            <TabsContent value="thesis" className="mt-4">
                              <div className="space-y-2">
                                <p className="font-semibold">{edu.thesis.title}</p>
                                <p className="text-sm text-muted-foreground">Advisor: {edu.thesis.advisor}</p>
                                <p className="text-sm text-muted-foreground">{edu.thesis.abstract}</p>
                              </div>
                            </TabsContent>
                          )}
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
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Professional Certifications</h2>
            </div>
            <Badge variant="outline" className="text-sm">
              {certifications.length} Active Certifications
            </Badge>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All Certifications' : category}
                {category !== 'all' && (
                  <Badge variant="secondary" className="ml-2">
                    {certifications.filter(c => c.category === category).length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <cert.icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary">{cert.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{cert.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-2">
                      <div className="w-6 h-6 rounded overflow-hidden">
                        <img src={cert.issuerLogo} alt={cert.issuer} className="w-full h-full object-cover" />
                      </div>
                      <span>{cert.issuer}</span>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{cert.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Issued</p>
                        <p className="font-semibold">{cert.issueDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Expires</p>
                        <p className="font-semibold">{cert.expiryDate}</p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <p className="text-sm font-semibold mb-2">Skills Covered</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{skill}</Badge>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Verify
                        </a>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="bg-muted/50 rounded p-2">
                      <p className="text-xs text-muted-foreground">
                        Credential ID: <span className="font-mono">{cert.credentialId}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Educational Timeline</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
            
            <div className="space-y-12">
              {[...degrees, ...certifications.slice(0, 4)].map((item, index) => {
                const isDegree = 'degree' in item;
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
                      <Card className="inline-block max-w-md">
                        <CardContent className="p-4">
                          <Badge className="mb-2">
                            {isDegree ? <GraduationCap className="w-3 h-3 mr-1" /> : <Award className="w-3 h-3 mr-1" />}
                            {isDegree ? 'degree' in item && item.period : 'issueDate' in item && item.issueDate}
                          </Badge>
                          <h4 className="font-bold mb-1">
                            {isDegree ? 'degree' in item && item.degree : 'name' in item && item.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {isDegree ? 'institution' in item && item.institution : 'issuer' in item && item.issuer}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    </div>
                    
                    <div className="flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Terminal */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <TerminalIcon className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Interactive Terminal</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Explore my credentials through a command-line interface. Type "help" to get started.
            </p>
            <Terminal />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Education;