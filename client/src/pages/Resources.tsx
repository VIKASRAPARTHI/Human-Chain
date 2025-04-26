import Navbar from '@/components/Navbar';
import { 
  FileText, 
  BookOpen, 
  Link as LinkIcon, 
  Video, 
  Download,
  ExternalLink
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';

export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Navbar />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="resources-page">
          <div className="flex flex-col space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center">
                <BookOpen className="mr-2 h-6 w-6 text-primary" />
                AI Safety Resources
              </h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Educational materials, guidelines, and tools for AI safety practitioners
              </p>
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="guidelines" className="w-full">
              <TabsList className="grid w-full max-w-2xl grid-cols-4">
                <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
                <TabsTrigger value="papers">Research Papers</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
              
              {/* Guidelines Tab */}
              <TabsContent value="guidelines" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>AI Safety Best Practices</CardTitle>
                          <CardDescription>Comprehensive guide for AI developers</CardDescription>
                        </div>
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Learn how to implement robust safety measures when developing AI systems. This guide covers risk assessment, testing protocols, and monitoring strategies.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="outline">Development</Badge>
                        <Badge variant="outline">Testing</Badge>
                        <Badge variant="outline">Deployment</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" className="text-primary">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Online
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Incident Response Playbook</CardTitle>
                          <CardDescription>How to respond to AI safety incidents</CardDescription>
                        </div>
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        A step-by-step guide on how to respond when AI systems behave unexpectedly. Includes roles and responsibilities, communication protocols, and remediation steps.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="outline">Response</Badge>
                        <Badge variant="outline">Mitigation</Badge>
                        <Badge variant="outline">Communication</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" className="text-primary">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Online
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>AI Alignment Framework</CardTitle>
                          <CardDescription>Ensuring AI systems align with human values</CardDescription>
                        </div>
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        A practical framework for building AI systems that act in accordance with human intentions and values. Covers design principles, evaluation methods, and oversight mechanisms.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="outline">Alignment</Badge>
                        <Badge variant="outline">Value Learning</Badge>
                        <Badge variant="outline">Oversight</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" className="text-primary">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Online
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>AI Ethics Guidelines</CardTitle>
                          <CardDescription>Ethical considerations for AI development</CardDescription>
                        </div>
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Comprehensive guide to navigating ethical dilemmas in AI development and deployment. Includes case studies, decision frameworks, and recommended practices.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="outline">Ethics</Badge>
                        <Badge variant="outline">Fairness</Badge>
                        <Badge variant="outline">Transparency</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" className="text-primary">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Online
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              {/* Research Papers Tab */}
              <TabsContent value="papers" className="mt-6">
                <div className="grid grid-cols-1 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Research Papers</CardTitle>
                      <CardDescription>Latest publications on AI safety</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                          <h3 className="font-medium text-gray-900 dark:text-white flex items-center">
                            <BookOpen className="h-4 w-4 mr-2 text-primary" />
                            Robustness to Out-of-Distribution Inputs in Large Language Models
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Authors: J. Smith, A. Zhang, R. Johnson (2025)
                          </p>
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex gap-2">
                              <Badge>LLMs</Badge>
                              <Badge>Robustness</Badge>
                            </div>
                            <Button variant="outline" size="sm">
                              <LinkIcon className="h-4 w-4 mr-2" />
                              Read Paper
                            </Button>
                          </div>
                        </li>

                        <li className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                          <h3 className="font-medium text-gray-900 dark:text-white flex items-center">
                            <BookOpen className="h-4 w-4 mr-2 text-primary" />
                            Scalable Oversight for Large AI Systems: An Empirical Study
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Authors: P. Chen, M. Kumar, S. Rodriguez (2025)
                          </p>
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex gap-2">
                              <Badge>Oversight</Badge>
                              <Badge>Evaluation</Badge>
                            </div>
                            <Button variant="outline" size="sm">
                              <LinkIcon className="h-4 w-4 mr-2" />
                              Read Paper
                            </Button>
                          </div>
                        </li>

                        <li className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                          <h3 className="font-medium text-gray-900 dark:text-white flex items-center">
                            <BookOpen className="h-4 w-4 mr-2 text-primary" />
                            Detecting and Preventing Deceptive Behavior in AI Agents
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Authors: E. Brown, L. Garcia, T. Williams (2024)
                          </p>
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex gap-2">
                              <Badge>Deception</Badge>
                              <Badge>Monitoring</Badge>
                            </div>
                            <Button variant="outline" size="sm">
                              <LinkIcon className="h-4 w-4 mr-2" />
                              Read Paper
                            </Button>
                          </div>
                        </li>

                        <li className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                          <h3 className="font-medium text-gray-900 dark:text-white flex items-center">
                            <BookOpen className="h-4 w-4 mr-2 text-primary" />
                            A Survey of AI Safety Incident Patterns in Real-World Deployments
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Authors: S. Taylor, H. Patel, M. Wilson (2024)
                          </p>
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex gap-2">
                              <Badge>Survey</Badge>
                              <Badge>Deployment</Badge>
                            </div>
                            <Button variant="outline" size="sm">
                              <LinkIcon className="h-4 w-4 mr-2" />
                              Read Paper
                            </Button>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Tools Tab */}
              <TabsContent value="tools" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>AI Safety Testing Kit</CardTitle>
                          <CardDescription>Automated tools for testing AI systems</CardDescription>
                        </div>
                        <Video className="h-6 w-6 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        A suite of open-source tools for testing and evaluating AI systems for safety issues. Includes adversarial testing, behavioral analysis, and alignment evaluation.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="outline">Open Source</Badge>
                        <Badge variant="outline">Testing</Badge>
                        <Badge variant="outline">Python</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit GitHub Repository
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>AI Monitoring Dashboard</CardTitle>
                          <CardDescription>Real-time monitoring for AI systems</CardDescription>
                        </div>
                        <Video className="h-6 w-6 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        A configurable dashboard for monitoring the behavior of deployed AI systems. Track performance, detect anomalies, and receive alerts when systems deviate from expected behavior.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="outline">Monitoring</Badge>
                        <Badge variant="outline">Alerts</Badge>
                        <Badge variant="outline">Web App</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Learn More & Download
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>AI Safety Model Cards</CardTitle>
                          <CardDescription>Templates for model documentation</CardDescription>
                        </div>
                        <Video className="h-6 w-6 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Standardized templates for documenting AI models, their capabilities, limitations, and safety considerations. Helps improve transparency and facilitate better model usage.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="outline">Documentation</Badge>
                        <Badge variant="outline">Templates</Badge>
                        <Badge variant="outline">Markdown</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Get Templates
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Red Teaming Platform</CardTitle>
                          <CardDescription>Collaborative platform for AI evaluation</CardDescription>
                        </div>
                        <Video className="h-6 w-6 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        A platform that enables teams to collaboratively test AI systems for safety issues. Includes test case management, bug tracking, and reporting capabilities.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="outline">Collaboration</Badge>
                        <Badge variant="outline">Evaluation</Badge>
                        <Badge variant="outline">SaaS</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Try Platform
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              {/* FAQ Tab */}
              <TabsContent value="faq" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>Common questions about AI safety incidents</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>What counts as an AI safety incident?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            An AI safety incident is any event where an AI system behaves in an unexpected, undesired, or harmful way. This can include producing harmful outputs, making incorrect decisions with significant consequences, exhibiting bias or unfairness, or behaving in ways that contradict its intended design and goals.
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                            Examples include:
                          </p>
                          <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 mt-1">
                            <li>A content recommendation system promoting harmful or extremist content</li>
                            <li>An AI assistant providing dangerously incorrect medical information</li>
                            <li>A hiring algorithm exhibiting discriminatory patterns</li>
                            <li>An autonomous system making decisions that cause physical harm</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger>How should we report an AI safety incident?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            To report an AI safety incident, you should document the following details:
                          </p>
                          <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 mt-1">
                            <li>Clear description of what happened and the observed behavior</li>
                            <li>Date and time of the incident</li>
                            <li>The specific system or model involved (including version numbers)</li>
                            <li>Input provided to the system (if applicable)</li>
                            <li>Any context about how the system was being used</li>
                            <li>Impact or potential harm caused</li>
                            <li>Screenshots or other evidence if available</li>
                          </ul>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                            Submit this information through the "Report Incident" button on the dashboard. For critical incidents, also consider contacting the system vendor or developer directly.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger>What is the difference between severity levels?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            We classify incidents by severity level to prioritize response and resources:
                          </p>
                          <ul className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                            <li className="mb-2"><span className="font-bold text-red-500">High:</span> Incidents that cause or have the potential to cause significant harm. These require immediate attention and urgent mitigation measures. Examples include systems causing physical harm, severe discrimination, or significant security breaches.</li>
                            <li className="mb-2"><span className="font-bold text-amber-500">Medium:</span> Incidents that cause moderate harm or have the potential to escalate if not addressed. These warrant prompt attention but may not require emergency measures. Examples include repeated misinformation, concerning bias patterns, or unexpected system behaviors with moderate impact.</li>
                            <li><span className="font-bold text-green-500">Low:</span> Minor incidents with limited actual or potential harm. These should be tracked and monitored but may not require immediate intervention. Examples include isolated errors, minor accuracy issues, or potential edge cases identified during testing.</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger>How can we prevent AI safety incidents?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            Preventing AI safety incidents requires a comprehensive approach:
                          </p>
                          <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 mt-1">
                            <li><span className="font-semibold">Robust Testing:</span> Implement extensive testing including adversarial testing, edge cases, and stress testing.</li>
                            <li><span className="font-semibold">Red Teaming:</span> Have dedicated teams try to make the system fail or produce harmful outputs.</li>
                            <li><span className="font-semibold">Monitoring:</span> Implement continuous monitoring of deployed systems to detect anomalies.</li>
                            <li><span className="font-semibold">Safety Guidelines:</span> Follow established AI safety guidelines and best practices.</li>
                            <li><span className="font-semibold">Alignment Techniques:</span> Use techniques like constitutional AI and RLHF to align systems with human values.</li>
                            <li><span className="font-semibold">Human Oversight:</span> Maintain appropriate human review and oversight, especially for high-stakes decisions.</li>
                            <li><span className="font-semibold">Learning from Incidents:</span> Study past incidents to identify patterns and preventive measures.</li>
                          </ul>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                            Refer to our "AI Safety Best Practices" guide in the Guidelines section for detailed information.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5">
                        <AccordionTrigger>Where can I learn more about AI safety?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            To learn more about AI safety, consider these resources:
                          </p>
                          <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 mt-1">
                            <li>Our Resources section contains guides, papers, and tools</li>
                            <li>Online courses from universities like Stanford, MIT, and Berkeley</li>
                            <li>Research organizations like AI Safety Center, Future of Humanity Institute, and Alignment Research Center</li>
                            <li>Technical AI safety conferences like FAccT, AAAI, NeurIPS (safety workshops)</li>
                            <li>Books: "Human Compatible" by Stuart Russell, "The Alignment Problem" by Brian Christian</li>
                          </ul>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                            We also recommend joining AI safety communities and forums where practitioners share insights, challenges, and best practices.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}