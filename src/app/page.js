import '../styles//home.scss'
import Question1 from "@/components/question1";
import FeatureCard from "@/components/feature-card";
import Link from "next/link";
import HomePanel from '@/components/HomePanel';
import Navbar from '@/components/Navbar';

export default function Home() {
  
  return (
    <div className="home-container">
      <header
        data-thq="thq-navbar"
        className="navbarContainer home-navbar-interactive"
      >
        <span className="logo">VIEW360</span>
        <Navbar />
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="home-mobile-menu1 mobileMenu"
        >
          <div className="home-nav">
            <div className="home-top">
              <span className="logo">VIDQA</span>
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg
                  viewBox="0 0 1024 1024"
                  className="home-icon02 socialIcons"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links1">
              <span className="home-nav121 bodySmall">Upload</span>
              <span className="home-nav221 bodySmall">Questions</span>
              <span className="home-nav321 bodySmall">Responses</span>
              <span className="home-nav421 bodySmall">Support</span>
              <span className="home-nav521 bodySmall">Sign In</span>
            </nav>
            <div className="home-buttons1">
              <button className="buttonFlat">Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="home-icon04 socialIcons"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="home-icon06 socialIcons"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="home-icon08 socialIcons"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-header"></div>
      <div className="home-hero">
        <HomePanel />
      </div>
      <div className="home-hero2">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1529859503572-5b9d1e68e952?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjYxODI1OTE&amp;ixlib=rb-1.2.1&amp;w=1200"
          className="home-image"
        />
        <div className="home-container02">
          <h1 className="home-text015">AI answers your questions</h1>
          <h2 className="home-text016">
            upload your video and ask your question about videos
          </h2>
          <div className="home-btn-group1">
            <button className="home-button button">Get Started</button>
            <button className="home-button1 button">Learn More</button>
          </div>
          <span className="home-text017">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                Lorem
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container03">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Unlock the Power of Video Q&amp;A
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Discover the features that make our platform unique
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container04">
              <FeatureCard
                heading="Upload Videos and Audios"
                subHeading="Easily upload your video or audio files or provide a link to them"
              ></FeatureCard>
              <FeatureCard
                heading="Ask Questions"
                subHeading="Pose questions related to the uploaded videos or audios"
              ></FeatureCard>
              <FeatureCard
                heading="Receive Responses"
                subHeading="Get video clip responses from other users"
              ></FeatureCard>
              <FeatureCard
                heading="Interactive Experience"
                subHeading="Engage in a dynamic and interactive Q&amp;A format"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="pricingContainer">
          <div className="home-container05">
            <span className="overline">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">Choose the Right Plan for You</h2>
            <span className="home-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  Unlock the full potential of our platform with our flexible
                  pricing options.
                </span>
              </span>
            </span>
          </div>
          <div className="home-container06">
            <div className="freePricingCard home-pricing-card">
              <div className="home-container07">
                <span className="home-text053 heading3">Free</span>
                <span className="bodySmall">Access to basic features</span>
              </div>
              <div className="home-container08">
                <span className="home-text054">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container09">
                <div className="home-container10">
                  <span className="home-text057">✔</span>
                  <span className="bodySmall">
                    Upload and ask questions about videos or audios
                  </span>
                </div>
                <div className="home-container11">
                  <span className="home-text058">✔</span>
                  <span className="bodySmall">
                    Receive responses in video clips
                  </span>
                </div>
                <div className="home-container12">
                  <span className="home-text059">✔</span>
                  <span className="bodySmall">
                    Unlimited video/audio uploads
                  </span>
                </div>
                <div className="home-container13">
                  <span className="home-text060">✔</span>
                  <span className="bodySmall">Basic customer support</span>
                </div>
              </div>
              <button className="home-button2 buttonOutline">
                Continue with Free
              </button>
            </div>
            <div className="basicPricingCard home-pricing-card1">
              <div className="home-container14">
                <span className="home-text061 heading3">BASIC</span>
                <span className="bodySmall">
                  Enhanced features for individuals
                </span>
              </div>
              <div className="home-container15">
                <span className="home-text062">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">9.99</span>
                <span className="home-text065">/ month</span>
              </div>
              <div className="home-container16">
                <div className="home-container17">
                  <span className="home-text066">✔</span>
                  <span className="bodySmall">All features of FREE plan</span>
                </div>
                <div className="home-container18">
                  <span className="home-text068">✔</span>
                  <span className="bodySmall">All Free plan features</span>
                </div>
                <div className="home-container19">
                  <span className="home-text069">✔</span>
                  <span className="bodySmall">Priority customer support</span>
                </div>
                <div className="home-container20">
                  <span className="home-text070">✔</span>
                  <span className="bodySmall">
                    Advanced analytics and insights
                  </span>
                </div>
                <div className="home-container21">
                  <span className="home-text071">✔</span>
                  <span className="bodySmall">
                    Ability to embed videos on external websites
                  </span>
                </div>
              </div>
              <button className="home-button3 buttonFilledSecondary">
                Try the Basic plan
              </button>
            </div>
            <div className="proPricingCard home-pricing-card2">
              <div className="home-container22">
                <span className="home-text072 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  Advanced features for businesses and teams
                </span>
              </div>
              <div className="home-container23">
                <span className="home-text075">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">19.99</span>
                <span className="home-text078">/ month</span>
              </div>
              <div className="home-container24">
                <div className="home-container25">
                  <span className="home-text079">✔</span>
                  <span className="bodySmall"> All features of BASIC plan</span>
                </div>
                <div className="home-container26">
                  <span className="home-text081">✔</span>
                  <span className="bodySmall">All Basic plan features</span>
                </div>
                <div className="home-container27">
                  <span className="home-text082">✔</span>
                  <span className="bodySmall">
                    Team collaboration and sharing
                  </span>
                </div>
                <div className="home-container28">
                  <span className="home-text083">✔</span>
                  <span className="bodySmall">
                    Custom branding and white-labeling
                  </span>
                </div>
                <div className="home-container29">
                  <span className="home-text084">✔</span>
                  <span className="bodySmall">API access for integration</span>
                </div>
              </div>
              <button className="home-button4 buttonFilledSecondary">
                Try the PRO plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
            Ask Questions, Get Answers
          </h1>
          <span className="home-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  Welcome to our platform where you can upload your video or
                  audio content and ask questions related to it. Our community
                  of experts and enthusiasts will provide you with insightful
                  responses in video clips. Whether you need feedback,
                  explanations, or opinions, we&apos;ve got you covered.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <button className="buttonFilled">Learn More</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container30">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text102 heading2">Common questions</h2>
              <span className="home-text103 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container31">
              <Question1
                answer="To upload your video or audio, simply click on the 'Upload' button on the homepage and select the file from your device."
                question="How can I upload my video or audio?"
              ></Question1>
              <Question1
                answer="Yes, you can provide a link to your video or audio by clicking on the 'Upload' button and selecting the 'Provide Link' option. Then, paste the link in the designated field."
                question="Can I provide a link to my video or audio instead of uploading a file?"
              ></Question1>
              <Question1
                answer="The response time may vary depending on the number of questions and the availability of other users. However, we strive to provide timely responses within 24-48 hours."
                question="How long does it take to receive responses to my questions?"
              ></Question1>
              <Question1
                answer="Yes, you can ask multiple questions about the same video or audio. Each question will be treated as a separate query and will receive individual responses."
                question="Can I ask multiple questions about the same video or audio?"
              ></Question1>
              <Question1
                answer="You will receive the responses to your questions in the form of video clips. These clips will be available for viewing on your account dashboard."
                question="How will I receive the responses to my questions?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="footerContainer home-footer1">
          <div className="home-container32">
            <span className="logo">VIEW360</span>
            <nav className="home-nav1">
              <span className="bodySmall">Upload</span>
              <span className="home-nav222 bodySmall">Questions</span>
              <span className="home-nav322 bodySmall">Responses</span>
              <span className="home-nav422 bodySmall">Support</span>
              <span className="home-nav522 bodySmall">Sign In</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container33">
            <span className="bodySmall home-text106">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="home-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon10 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon12 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon14 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

