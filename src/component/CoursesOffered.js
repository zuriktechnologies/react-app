
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Form, Col, Row, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Button from '../commonComponent/ButtonComponent';
import ButtonComponent from '../commonComponent/ButtonComponent';
import { data } from 'react-router-dom';
const CoursesOffered = () => {

    const [selectedCourse, setSelectedCourse] = useState(['Android App Development', 'IPhone App Development', 'Software Testing', 'Java', 'PHP', 'Python', 'Web Designing', 'Big Data', 'Hadoop', 'Machine Learning with Python', 'Deep Learning', 'Ethical Hacking', 'Cyber Security', 'Data Science', 'Data Analytics', '.Net', 'CCNA', 'C++', 'C']);
   const [selectedInd, selectedCourseInd] = useState(0)
    return (
        <div>
            <section className="breadcrumb-classic context-dark">
                <div className="shell">
                    <div className="center">
                        <h1 className="reveal-sm-block"> <img src="https://piford.com/images/development.png" style={{ marginRight: '30px' }} className='courseImage' />Courses Offered</h1>
                    </div>
                </div>
            </section>
            <div className="shell" style={{ padding: '35px' }}>

                <h5 className="bg-catskill"> If you are looking to make a fruitful career, we will help you kick start. We have helped hundreds of graduates achieve success in their respective area of interest through our continuous dedication which comes along with our rich domain expertise. This might be the right time of the year for you to enroll for Training and we won’t keep you waiting anymore. Let’s get together to build a pathway where you could drive upon to reach to the success mark!</h5>
                <div data-type="vertical" className="responsive-tabs responsive-tabs-classic vertical resp-vtabs tabs-lg-collapsed" style={{ width: '100%' }}>
                    <Row style={{paddingTop:17}}>
                        <Col>
                            <ul data-group="tabs-lg-collapsed" className="resp-tabs-list tabs-1 text-center tabs-lg-collapsed">

                                {
                                    selectedCourse?.map((data, index) => {
                                        return (
                                            <li className={selectedInd==index?"resp-tab-item tabs-lg-collapsed resp-tab-active":"resp-tab-item tabs-lg-collapsed"} aria-controls="tabs-lg-collapsed_tab_item-0" role="tab" key={index} onClick={()=>selectedCourseInd(index)}>{data}</li>
                                        )
                                    })
                                }
                            </ul>
                        </Col>
                        <Col>
                            <div data-group="tabs-lg-collapsed" className="resp-tabs-container text-sm-left tabs-lg-collapsed">
                                <div className="resp-accordion tabs-lg-collapsed resp-tab-active" role="tab" aria-controls="tabs-lg-collapsed_tab_item-0"><span className="resp-arrow"></span>Android App Development</div><div className="view-animate zoomInSmall active resp-tab-content tabs-lg-collapsed resp-tab-content-active" aria-labelledby="tabs-lg-collapsed_tab_item-0" style={{ display: 'block' }}>
                                    <div className="inset-lg-left-60">
                                        <h2 className="text-bold veil reveal-lg-block">Android App Development</h2>
                                        <div className="offset-lg-top-60">
                                            <p className="text-justify"><strong>Android training</strong> emerge as passion for new generation IT professionals because android mobile application development is extremely in demand these days as each brand wish to develop its mobile application to deliver its customers in exceptional way and in this way Android has achieve most prominent position in the market and that is why <strong>Android Training in Chandigarh</strong> has come to be first choice of each IT professional. <br />
                                                <br />
                                                Piford Technologies provides the <strong><a href="#"  style={{color:'#fec20b',textDecoration:'none'}}>Android Training in Chandigarh</a></strong>. Piford Technologies is Mohali situated IT company deals in Android mobile applications for Indians and overseas customers. We trained the aspirants which are showing their interest in doing <strong>Android Course in Chandigarh.</strong> <br />
                                                <br />
                                                There are many students which are placed in a good companies and they commend our Organization as the <strong>Best Android Training Organization in Chandigarh.</strong> <br />
                                                <br />
                                                <p>
                                                    Piford Technologies are planned at creating skilled manpower in the country by contributing quality training programs in the field of website development &amp; mobile application development. <br />
                                                </p>
                                                <div className="offset-top-30"><a href="http://www.piford.in"><img src="https://piford.com/images/piford-images/banners/commonpic.png" width="770" height="480" alt="" className="img-responsive reveal-inline-block" /></a></div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="offset-top-30">
                        <h6 className="text-bold">Areas of Development</h6>
                        <div className="text-subline"></div>
                        <div className="range offset-top-20">
                            <div className="cell-sm-6 cell-md-4">
                                <ul className="list list-unstyled list-marked">
                                    <h4 className="heading-color-all">JAVA</h4>

                                    <li>Introduction </li>
                                    <li>History </li>
                                    <li>Class Structure </li>
                                    <li>Main Method </li>
                                    <li>Data Types </li>
                                    <li>Variables</li>
                                    <h4 className="heading-color-all">Operators</h4>
                                    <li>Arithmetic </li>
                                    <li>Relational </li>
                                    <li>Bitwise </li>
                                    <li>Logical </li>
                                    <li>Misc Operator</li>
                                    <li>instance Of operator</li>
                                    <li>Console Input/Output</li>
                                    <li>Wrapper Classes</li>
                                    <h4 className="heading-color-all">Decision Making Statements</h4>
                                    <li>If Statement</li>
                                    <li>if-else Statement</li>
                                    <li>Ladder-If</li>
                                    <li>Switch Statement</li>
                                    <li>Nested If</li>
                                    <h4 className="heading-color-all">Looping</h4>
                                    <li>for loop</li>
                                    <li>while loop</li>
                                    <li>do-while loop</li>
                                    <h4 className="heading-color-all">Methods</h4>
                                    <li>Declaration &amp; Calling </li>
                                    <li>Method with Parameter </li>
                                    <li>Overloading</li>
                                    <li>Class Object Creation</li>
                                    <h4 className="heading-color-all">Constructor </h4>
                                    <li>Declaration &amp; Calling</li>
                                    <li>Constructor With Parameter</li>
                                    <li>Overloading</li>
                                    <li>super,this,static,final keywords</li>
                                    <h4 className="heading-color-all">Inheritance</h4>
                                    <li>Single Level</li>
                                    <li>Multi Level</li>
                                    <li>Hierarchical</li>
                                    <li>Multiple </li>
                                    <li>Hybrid</li>
                                    <h4 className="heading-color-all">Class </h4>
                                    <li>Nested Classes </li>
                                    <li>Anonymous Class Declaration</li>
                                    <h4 className="heading-color-all">Interface</h4>
                                    <li>Simple &amp; Nested</li>
                                    <li>Abstraction</li>
                                    <li>Package</li>
                                    <li>Access Specifier</li>
                                    <h4 className="heading-color-all">Exception Handling </h4>
                                    <li>Pre Defined Exceptions </li>
                                    <li>User Defined Exceptions </li>
                                    <li>Throw &amp; Throws Keyword</li>
                                    <h4 className="heading-color-all">Threads</h4>
                                    <li>Introduction</li>
                                    <li>Lifecycle</li>
                                    <li>Thread using Thread Class </li>
                                    <li>Thread using Runnable Interface </li>
                                    <li>Methods in thread </li>
                                    <li>MultiThreading</li>
                                    <h4 className="heading-color-all">Synchronization</h4>
                                    <li>Block</li>
                                    <li>Method </li>
                                    <li>Class</li>
                                    <li>Collection Framework</li>


                                </ul>
                            </div>









                            {/* <div className="cell-sm-6 cell-md-4" style="float:left">

                                                                            <h4 className="heading-color-all">ANDROID</h4>
                                                                            <ul>
                                                                                <li>Introduction</li>
                                                                                <li>History</li>
                                                                                <li>API, SDK, ART</li>
                                                                                <li>Android &amp; JAVA</li>

                                                                                <h4 className="heading-color-all">ANDROID FUNDAMENTALS</h4>

                                                                                <li className="Sub_list">Basic Building blocks -Activities,Services,Broadcast Receivers &amp; Content providers</li>
                                                                                <li className="Sub_list">UI Components -Views &amp; notifications</li>
                                                                                <li className="Sub_list">Components for communication -Intents &amp; Intent Filters</li>
                                                                            </ul>



                                                                            <li><strong>5. Android API levels (versions &amp; version names) </strong></li>



                                                                            <h4 className="heading-color-all"> Basic UI design</h4>

                                                                            <li>1. Form widgets </li>
                                                                            <li>2. Text Fields </li>
                                                                            <li>3. Layouts </li>
                                                                            <li>4. [dip, dp, sip, sp] versus px</li>
                                                                            <li>5. Lists</li>
                                                                            <li>6. Web View &amp; Web Pages</li>









                                                                            <h4 className="heading-color-all"> Intents (in detail)</h4>

                                                                            <li>1. What is intent ? How many types of intents use in android.</li>
                                                                            <li>2. Explicit Intents </li>
                                                                            <li>3. Implicit intents</li>

                                                                            <h4 className="heading-color-all">Styles &amp; Themes</h4>

                                                                            <li>1. Styles.xml</li>
                                                                            <li>2. Drawable resources for shapes, gradients (selectors)</li>
                                                                            <li>3. Style attribute in layout file</li>
                                                                            <li>4. Applying themes via code and manifest file</li>

                                                                            <h4 className="heading-color-all">Adapters and Widgtes</h4>
                                                                            <li>1. ArrayAdapters</li>
                                                                            <li>2. BaseAdapters</li>
                                                                            <li>3. ListView and ListActivity</li>
                                                                            <li>4. Custom listview</li>
                                                                            <li>5. GridView using adapters</li>
                                                                            <li>6. Gallery using adapters</li>
                                                                            <li>7. Hashtable, Hashmap</li>



                                                                            <h4 className="heading-color-all"> Notifications</h4>

                                                                            <li>1. Broadcast Receivers </li>
                                                                            <li>2. Services and notifications</li>
                                                                            <li>3. Toast </li>
                                                                            <li>4. Alarms </li>

                                                                            <h4 className="heading-color-all">Threads</h4>

                                                                            <li>1. Threads running on UI thread (runOnUiThread) </li>
                                                                            <li>2. Handlers &amp; Runnable </li>
                                                                            <li>3. AsynTask (in detail)</li>

                                                                            <h4 className="heading-color-all">Android Multimedia &amp; Animation</h4>

                                                                            <li>1. MediaPlyer: Audio </li>
                                                                            <li>2. MediaPlyer: Video </li>
                                                                            <li>3. Recording Media </li>

                                                                            <h4 className="heading-color-all">Android Telephony</h4>

                                                                            <li>1. TelephonyManager</li>
                                                                            <li>2. Get Call State </li>
                                                                            <li>3. Simple Caller Talker</li>
                                                                            <li>4. Phone Call</li>
                                                                            <li>5. Send SMS</li>



                                                                            <h4 className="heading-color-all">Social Media Integration </h4>

                                                                            <li>1. Facebook </li>
                                                                            <li>2. Youtube</li>
                                                                            <li>3. LinkedIn </li>
                                                                            <li>4. Twitter</li>



                                                                            <h4 className="heading-color-all">Application Structure (in detail)</h4>

                                                                            <li><strong>1. AndroidManifest.xml </strong></li>
                                                                            <li><strong>2. Uses-permission &amp; uses-sdk </strong></li>
                                                                            <li><strong>3. Resources &amp; R.java </strong></li>
                                                                            <li><strong>4. Assets </strong></li>
                                                                            <li><strong>5. Layouts &amp; Drawable Resources</strong></li>
                                                                            <li><strong>6. Activities and Activity lifecycle </strong></li>

                                                                            <h4 className="heading-color-all">Emulator-Android Virtual Device</h4>

                                                                            <li><strong>1. Launching Emulator </strong></li>
                                                                            <li><strong>2. Editing Emulator Settings </strong></li>
                                                                            <li><strong>3. Emulator Shortcuts </strong></li>
                                                                            <li><strong>4. Logcat Usage</strong></li>
                                                                            <li><strong>5. Introduction to DDMS </strong></li>
                                                                            <li><strong>6. Second App:-(Switching Between Activities) </strong></li>
                                                                            <li><strong>7. Develop an app for demonstrating the communication between Intents </strong></li>

                                                                            <h4 className="heading-color-all">Menu</h4>

                                                                            <li><strong>1. Option Menu </strong></li>
                                                                            <li><strong>2. Context Menu </strong></li>
                                                                            <li><strong>3. Sub Menu </strong></li>
                                                                            <li><strong>4. Menu from XML </strong></li>
                                                                            <li><strong>5. Menu via Code </strong></li>
                                                                            <li><strong>6. Drawer Navigation Bar </strong></li>

                                                                            <h4 className="heading-color-all"> UI design</h4>

                                                                            <li><strong>1. Time and Date </strong></li>
                                                                            <li><strong>2. Images and media </strong></li>
                                                                            <li><strong>3. Composite </strong></li>
                                                                            <li><strong>4. Alert Dialogs &amp; Toast </strong></li>
                                                                            <li><strong>5. Popup </strong></li>

                                                                            <h4 className="heading-color-all">Content Providers</h4>

                                                                            <li>1. SQLite Programming </li>
                                                                            <li>2. SQLiteOpenHelper</li>
                                                                            <li>3. SQLiteDatabse </li>
                                                                            <li>4. Cursor </li>
                                                                            <li>5. Reading and updating Contacts </li>
                                                                            <li>6. Reading bookmarks </li>
                                                                            <li>7. Develop an App to demonstrate database usage. CRUD operations must be implemented. </li>

                                                                            <h4 className="heading-color-all"> Custom Components</h4>

                                                                            <li>1. Custom Tabs </li>
                                                                            <li>2. Custom Layout </li>
                                                                            <li>3.Other Components </li>

                                                                            <h4 className="heading-color-all"> Preferences, Tabs &amp; ADB Tools</h4>

                                                                            <li>1. SharedPreferences </li>
                                                                            <li>2. What is Tab ? And what is the use of Tab activity. </li>
                                                                            <li>3. Fragments</li>

                                                                            <h4 className="heading-color-all"> Android Speech</h4>

                                                                            <li>1. Custom Tabs </li>
                                                                            <li>2. Custom Layout </li>
                                                                            <li>3. Other Components</li>

                                                                            <h4 className="heading-color-all">Android Device</h4>

                                                                            <li>1. Bluetooth Tutorial </li>
                                                                            <li>2. List Paired Devices </li>
                                                                            <li>3. WIFI </li>
                                                                            <li>4. Phone Call</li>
                                                                            <li>5. Send SMS</li>

                                                                            <h4 className="heading-color-all"> Android Web API <img src="data:image/gif;base64,R0lGODlhFgAHAKEBAAAAAP////+cAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgADACwAAAAAFgAHAAACKRwwhsenD0I4MkopBMhb21lVB0d61/VNZUeB4TRmMme1qepxiQM1z18AACH5BAUKAAMALA0AAQAIAAUAAAIKTGZol8vvnBqzAAAh+QQFCgADACwBAAEABgAFAAACCJQ2pqltvFgBACH5BAUKAAMALAEAAQAMAAUAAAIRTDY2wmynGEovNkqPRAo3VgAAOw==" alt="best android training institute in chandigarh" title="best android training institute in chandigarh" style="margin-top:8px;" data-pagespeed-url-hash="3317202148" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/></h4>

                                                                            <li>1. SOAP </li>
                                                                            <li>2. REST </li>
                                                                            <li>3. XML </li>
                                                                            <li>4. JSON</li>

                                                                            <h4 className="green-box p-10"> Advanced Android <img src="data:image/gif;base64,R0lGODlhFgAHAKEBAAAAAP////+cAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgADACwAAAAAFgAHAAACKRwwhsenD0I4MkopBMhb21lVB0d61/VNZUeB4TRmMme1qepxiQM1z18AACH5BAUKAAMALA0AAQAIAAUAAAIKTGZol8vvnBqzAAAh+QQFCgADACwBAAEABgAFAAACCJQ2pqltvFgBACH5BAUKAAMALAEAAQAMAAUAAAIRTDY2wmynGEovNkqPRAo3VgAAOw==" alt="best android training institute in chandigarh" title="best android training institute in chandigarh" style="margin-top:8px;" data-pagespeed-url-hash="3317202148" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/></h4>

                                                                            <li>1. GCM Push Notification</li>
                                                                            <li>2. Gestures</li>
                                                                            <li>. Integrate Google AdMob in App </li>
                                                                            <li>4. Put your APP in Google Play Store</li>
                                                                            <li>5. Google Map</li>
                                                                            <li>6. GPS Tracking</li>
                                                                            <li>7. PayPal Integration</li>






                                                                            <h4 className="green-box p-10">Learn Code with Kotlin <img src="data:image/gif;base64,R0lGODlhFgAHAKEBAAAAAP////+cAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgADACwAAAAAFgAHAAACKRwwhsenD0I4MkopBMhb21lVB0d61/VNZUeB4TRmMme1qepxiQM1z18AACH5BAUKAAMALA0AAQAIAAUAAAIKTGZol8vvnBqzAAAh+QQFCgADACwBAAEABgAFAAACCJQ2pqltvFgBACH5BAUKAAMALAEAAQAMAAUAAAIRTDY2wmynGEovNkqPRAo3VgAAOw==" alt="best android training institute in chandigarh" title="best android training institute in chandigarh" style="margin-top:8px;" data-pagespeed-url-hash="3317202148" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/></h4>

                                                                            <li>1. Introduction to kotlin</li>
                                                                            <li>2. Syntax to Kotlin</li>
                                                                            <li>3. How to add Kotlin in Android Studio </li>
                                                                            <li>4. Develop apps using Kotlin</li>
                                                                        </div> */}
                            {/* </div> */}
                            {/* </div> */}
                        </div>
                    </div>
                                </div>
                        </Col>
                    </Row>


                  
                    {/* <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-1"><span className="resp-arrow"></span>IPhone App Development</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-1">
                        <div className="inset-lg-left-60">
                            <h4 className="text-bold veil reveal-lg-block">IPhone App Development</h4>
                            <div className="offset-lg-top-60">
                                <p>Piford Technologies provide you the best iPhone App Development Training Course in Chandigarh, Mohali and Panchkula . We have best faculty in this region. We are basically the development company having separate division for training, where we give training on Real Live Projects which will give you the flavor of employment. High end meting out systems with internet way in makes the students to study, practice and work professionally and to clear their fears immediately.</p>
                            </div>
                            <div className="offset-top-30"><a href="http://www.piford.in"><img src="images/piford-images/banners/commonpic.png" width="770" height="480" alt="" className="img-responsive reveal-inline-block" /></a></div>
                            <div className="offset-top-30">
                                <h6 className="text-bold">Skills and Tools</h6>
                                <div className="text-subline"></div>
                                <div className="offset-top-20">
                                    <ul className="list list-unstyled list-marked">
                                        <h4 className="heading-color-all">Objective C</h4>
                                        <li>Introduction to Objective-c programming</li>
                                        <li>Primitive Data Types and Operators</li>
                                        <li>Flow Control Statements</li>
                                        <li>Arrays and Structures</li>
                                        <li>Classes, Objects, and Messaging</li>
                                        <li>Memory Management and Properties</li>
                                        <li>Inheritance, Polymorphism</li>
                                        <li>Protocols and Categories</li>
                                        <li>Introduction to Foundation Framework Classes</li>
                                        <li>File Handling</li>
                                        <li>Property Lists, NSCopy, and Archiving</li>
                                        <li>Selectors and Targets</li>
                                        <li>Dynamic Typing and Dynamic Binding</li>
                                        <h4 className="heading-color-all">iPhone SDK</h4>
                                        <li>Introduction to iPhone Architecture</li>
                                        <li>Introduction to Development IDE – XCODE, Interface Builder</li>
                                        <li>Creating and building simple applications</li>
                                        <li>Handling Basic Interaction</li>
                                        <li>Creating basic view controllers</li>
                                        <li>Monitoring events and actions</li>
                                        <li>Creating advanced view controllers</li>
                                        <li>Memory Management</li>
                                        <li>Story-boarding Integration</li>
                                        <li>Programmatic Interface creation</li>
                                        <li>Integrating with core services – Email, Contacts, Camera, Map kit etc</li>
                                        <li>Data: actions, preferences, files, and addresses</li>
                                        <li>Camera, WebKit, Mapkit and core location</li>
                                        <li>Creating of database and using it in iPhone app</li>
                                        <li>Introduction to url loading system</li>
                                        <li>Debugging, testing the application</li>
                                        <h4 className="heading-color-all">IOS Advanced</h4>
                                        <li>Core Data Integration</li>
                                        <li>Advanced controllers – Navigation controller, iPad specific split controllers etc</li>
                                        <li>Integrating with Core Services – Core Audio, Video</li>
                                        <li>Push notification</li>
                                        <li>iAD Integration</li>
                                        <li>Advanced Even Handling – Multi touch, Gesture Recognition</li>
                                        <li>Maps overview and core location</li>
                                        <li>Protocols and Categories</li>
                                        <li>Communication with the Services</li>
                                        <li>Using the Accelerometer</li>
                                        <li>Bluetooth Programming</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-2"><span className="resp-arrow"></span>Software Testing</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-2">
                        <div className="inset-lg-left-60">
                            <h2 className="text-bold veil reveal-lg-block">Software Testing</h2>
                            <div className="offset-lg-top-60">
                                <p>Software Testing Training Course In Chandigarh
                                    Piford Technologies provide you best Software Testing Training Course in Chandigarh, Mohali and Panchkula . We have best faculty in this region. We are basically the development company having separate division for training, where we give training on Real Live Projects which will give you the flavor of employment. High end meting out systems with internet way in makes the students to study, practice and work professionally and to clear their fears immediately.</p>
                            </div>
                            <div className="offset-top-30"><a href="http://www.piford.in"><img src="images/piford-images/banners/commonpic.png" width="770" height="480" alt="" className="img-responsive reveal-inline-block" /></a></div>
                            <div className="offset-top-30">
                                <h6 className="text-bold">Activities Focus</h6>
                                <div className="text-subline"></div>
                                <div className="range offset-top-20">
                                    <div className="cell-sm-6 cell-md-4">
                                        <ul className="list list-unstyled list-marked">
                                            <h4 className="heading-color-all">Software Testing (Manual)</h4>
                                            <h4 className="heading-color-all">SDLC</h4>
                                            <li>SDLC and STLC?</li>
                                            <li>Different SDLC models</li>
                                            <li>Different Testing types</li>
                                            <li>Difference between SDLC and STLC</li>
                                            <li>Different Testing techniques</li>

                                            <h4 className="heading-color-all">Verification and Validation Model(V Model)</h4>
                                            <h4 className="heading-color-all">Alpha Testing and Types</h4>
                                            <h4 className="heading-color-all">Beta Testing and Types</h4>
                                            <h4 className="heading-color-all">Positive Testing</h4>
                                            <h4 className="heading-color-all">Negative Testing</h4>
                                            <h4 className="heading-color-all">Adhoc Testing</h4>
                                            <li>Buddy Testing</li>
                                            <li>Pair Testing</li>
                                            <li>Monkey Testing</li>
                                            <h4 className="heading-color-all">Campatibility Testing</h4>
                                            <h4 className="heading-color-all">GUI Testing</h4>
                                            <h4 className="heading-color-all">Security Testing and Types</h4>
                                            <h4 className="heading-color-all">Accessibility Testing</h4>
                                            <h4 className="heading-color-all">Unit Testing and Types</h4>
                                            <h4 className="heading-color-all">Black Box and Types</h4>
                                            <li>Black Box Testing Techniques</li>
                                            <li>Equivalence Testing</li>
                                            <li>Boundary Testing</li>
                                            <li>Decision Testing</li>
                                            <li>State Testing</li>
                                            <li>Use Case</li>

                                            <h4 className="heading-color-all">Static Testing and Types</h4>
                                            <li>Informal Review</li>
                                            <li>Walkthrough</li>
                                            <li>Technical Review</li>
                                            <li>Inspection</li>
                                            <h4 className="heading-color-all">Dynamic Testing and Types</h4>
                                            <h4 className="heading-color-all">Structured Based</h4>
                                            <li>Statement coverage</li>
                                            <li>Condition Coverage</li>
                                            <li>Decision Coverage</li>
                                            <h4 className="heading-color-all">Experienced Based</h4>
                                            <li>Error Guessing</li>
                                            <li>Exploratory</li>
                                            <h4 className="heading-color-all">Specification Based and Types</h4>
                                            <h4 className="heading-color-all">Rapid Application Development(RAD) </h4>
                                            <h4 className="heading-color-all">Requirement Traceability Matrix </h4>
                                            <li>Forward</li>
                                            <li>Backward</li>
                                            <li>Bidirectional</li>
                                            <h4 className="heading-color-all">Cosmetic  and Functional Testing</h4>
                                            <h4 className="heading-color-all">Severity and Priority</h4>
                                            <h4 className="heading-color-all">&nbsp;Testing Concepts</h4>

                                            <li>Introduction to Test Cases </li>
                                            <li>Introduction to Test plan</li>
                                            <li>Creating/Designing/Executing Test Cases</li>
                                            <li>Introduction to Test Case Management System</li>

                                            <h4 className="heading-color-all">Bug Tracking And Reporting</h4>
                                            <li>Fundamentals of Bug Tracking</li>
                                            <li>Generating report in Bug tracking </li>
                                            <li>Bug Reporting basics</li>

                                            <h4 className="heading-color-all">Advanced Concepts</h4>
                                            <li>Introduction to Agile &amp; SCRUM</li>
                                            <li>Introduction to test planning</li>
                                            <li>Difference between Desktop and Web based Application Testing</li>

                                            <h4 className="heading-color-all">Software Testing (Automation)</h4>
                                            <h4 className="heading-color-all">Introduction To Selenium</h4>
                                            <li>Introduction to Selenium</li>
                                            <li>Selenium Components</li>
                                            <li>Supported Browsers</li>
                                            <li>Supported Languages by Selenium</li>
                                            <li>Why we call it Selenium?</li>
                                            <li>Selenium Requirements</li>
                                            <li>Supported Platforms</li>
                                            <li>Advantages of Selenium</li>

                                            <h4 className="heading-color-all">Selenium-IDE</h4>
                                            <li>Selenium IDE Introduction</li>
                                            <li>Selenium IDE - Test Case Pane</li>
                                            <li>Selenium IDE Installation</li>
                                            <li>Selenium IDE - Tool Bar</li>
                                            <li>Selenium IDE - Log / Reference / UI Element/ Roll Up Pane</li>

                                            <h4 className="heading-color-all">Working With Selenium IDE</h4>
                                            <li>Creating Scripts</li>
                                            <li>Debugging</li>
                                            <li>Locator Assistance</li>
                                            <li>Editing scripts</li>
                                            <li>User Extension</li>
                                            <li>Format</li>

                                            <h4 className="heading-color-all">Selenium Commands And Locators</h4>
                                            <li>Selenium Commands</li>
                                            <li>Selenium Locators</li>

                                            <h4 className="heading-color-all">Selenium Set Up</h4>
                                            <li>Introduction to Eclipse</li>
                                            <li>Project SetUp</li>
                                            <li>Configure Build Path</li>
                                            <li>Adding a Project</li>
                                            <li>Adding Folders</li>

                                            <h4 className="heading-color-all">Selenium WebDriver</h4>
                                            <li>Introduction to Selenium</li>
                                            <li>Why WebDriver for Selenium?</li>
                                            <li>New Features in Selenium</li>
                                            <li>Configuring Eclipse for WebDriver</li>
                                            <li>Introduction to Webdriver</li>
                                            <li>WebDriver v/s RC</li>

                                            <h4 className="heading-color-all">Limitations of WebDriver</h4>
                                            <li>Installation of WebDriver</li>
                                            <li>Working With Selenium WebDriver</li>
                                            <li>Sample Program on Web Driver</li>
                                            <li>Implementation of WebDriver</li>

                                            <h4 className="heading-color-all">Selenium Grid</h4>
                                            <li>Introduction to Selenium Grid</li>
                                            <li>Different Versions of Selenium Grid</li>
                                            <li>Purpose of Selenium Grid</li>

                                            <h4 className="heading-color-all">Frameworks</h4>
                                            <li>TestNG, JUNIT</li>

                                            <h4 className="heading-color-all">JMETER</h4>
                                            <li>Introduction to JMeter</li>
                                            <li>How to install Jmeter in easy steps</li>
                                            <li>Complete Element reference for Jmeter</li>
                                            <li>Hands on with JMeter GUI</li>
                                            <li>Performance Testing using Jmeter</li>




                                            <h4 className="heading-color-all">QTP</h4>

                                            <li>Introduction to QTP </li>
                                            <li>How to use QTP IDE</li>
                                            <li>Record &amp; Run Settings | Recording the Script&nbsp;</li>
                                            <li>Object Identification&nbsp;&nbsp;</li>
                                            <li>Understanding Expert View&nbsp;</li>
                                            <li>Understanding Recorded Script&nbsp;</li>
                                            <li>Replay | Run Settings&nbsp;</li>
                                            <li>Test Results for QTP&nbsp;</li>
                                            <li>Parameterization&nbsp;</li>
                                            <li>Checkpoints - Standard Checkpoints&nbsp;</li>
                                            <li>Outputs Values&nbsp;</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-3"><span className="resp-arrow"></span>Java</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-3">
                        <div className="inset-lg-left-60">
                            <h2 className="text-bold veil reveal-lg-block">Java</h2>
                            <div className="offset-lg-top-60">
                                <p>Java Training Course In Chandigarh
                                    We have best faculty in this region. We are basically the development company having separate division for training. Our Java Training Course in Chandigarh, Mohali and Panchkula is designed by working java professionals with a combined experience of nearly 16+ years in java behind them. The development of this course was the meeting point of all these java professionals where they shared their magical concepts, ideas, real life experience and problems which resulted in this exciting course. Come and Join the gang and enjoy the world of Java.

                                    Java Training is designed keeping only three things in mind; Simplicity, Coverage and Efficiency:

                                </p>
                                <p><b>Simplicity</b> – The entire Java Training course is designed in a very simple way such that anyone who just reads, watches and practices this, would go on to become an effective Java Developer.

                                </p>
                                <p><b>Coverage </b>– No matter how we study, we all have topics to be covered while we do it. This Java training course covers all the topics required for you to become a self sustained Java Developer.
                                </p>
                                <p><b>Efficiency</b> – This Java course takes you through a journey in which you will be learning and experiencing a whole new world to its fullest by putting in minimum effort.
                                </p>
                                <p>
                                    Java Training is the hottest piece of cake in the IT Industry today and it will be tomorrow. This Java developer training course is an ideal platform for you to start learning Java and go on to explore more advanced features and ideas of Java in the future. There are more and more Companies who are migrating their applications from VB, .NET and other technologies to Java which leaves a huge empty space to be filled with Java and its technologies. Start early, learn Java and explore the countless opportunities in Java.</p>
                                <p></p><p>We are very happy to know that you are reading this. This is something which can change the course of your career towards the right direction; we don’t expect you to be a full time programmer to learn Java, we have designed this Java Training course such that a person with minimum or no prior programming knowledge is comfortable working with our text tutorials and watching videos to get used to programming and Java. Join this course wake the sleeping programmer up from inside you.</p>
                            </div>


                            <div className="offset-top-30"><a href="http://www.piford.in"><img src="images/piford-images/banners/commonpic.png" width="770" height="480" alt="" className="img-responsive reveal-inline-block" /></a></div>
                            <div className="offset-top-30">
                                <h6 className="text-bold">Essential Life Skills</h6>
                                <div className="text-subline"></div>




                                <ul className="list list-unstyled list-marked">

                                    <h4 className="heading-color-all"> Java Programming Language</h4>
                                    <li>Introduction to Java</li>
                                    <li>Overview of OOPS</li>
                                    <li>Objects Oriented programming in java</li>
                                    <li>Java Programming Constructs and Operators</li>
                                    <li>Objects &amp; Classes</li>
                                    <li>Methods &amp; Classes</li>
                                    <li>Inheritance</li>
                                    <li>Console IO</li>
                                    <li>Assertions</li>
                                    <li>Packages &amp; Interfaces</li>
                                    <li>Auto boxing</li>
                                    <li>Accepting Data from a User</li>
                                    <li>JavaBeans Exception Handling</li>
                                    <li>Threading/Multi Threading</li>
                                    <li>Collection Framework</li>
                                    <li>Console IO</li>
                                    <li>Assertions</li>
                                    <li>Generics</li>
                                    <li>File Handling/IO Operations</li>
                                    <h4 className="heading-color-all">Graphic Programming</h4>
                                    <li>Applets &amp; Applications</li>
                                    <li>AWT</li>
                                    <li>Creating a Web-Based Java Program</li>
                                    <li>Events Handling</li>
                                    <li>Layout Managers</li>
                                    <li>Creating GUI using Swing</li>
                                    <h4 className="heading-color-all">Designing &amp; Documentation</h4>
                                    <li>UML</li>
                                    <li>Javadoc Utilities</li>
                                    <h4 className="heading-color-all">Network Programming</h4>
                                    <li>Socket Programming</li>
                                    <li>RMI</li>
                                    <li>RMI IIOP</li>
                                    <li>Creating a Network Server Application</li>
                                    <li>Creating a Network Client Applet</li>
                                    <h4 className="heading-color-all"> Database Programming</h4>
                                    <li>Connectivity using JDBC</li>
                                    <li>JDBC API</li>
                                    <li>Intro to MVC Architecture</li>
                                    <li>Hands-on Practice</li>
                                    <h4 className="heading-color-all">Introduction To Advance Java/J2EE</h4>
                                    <li>Java Beans</li>
                                    <li>Servlets</li>
                                    <li>JSP</li>
                                    <li>Struts</li>
                                    <li>Hibernate</li>
                                    <li>DNS Overview</li>
                                    <li>Web Hosting Concept</li>
                                    <li>Apache tomcat implementation</li>
                                    <h4 className="heading-color-all">Understanding Ide’s</h4>
                                    <li>Netbeans</li>
                                    <li>Eclipse</li>
                                    <h4 className="heading-color-all">LIVE PROJECT</h4>
                                    <li>Requirement Analysis</li>
                                    <li>Design Initiation</li>
                                    <li>Design Completion</li>
                                    <li>Design Review</li>
                                    <li>Development Initiation</li>
                                    <li>Development progress</li>
                                    <li>Unit Testing</li>
                                    <li>Development Completion</li>
                                    <li>System Testing</li>
                                    <h4 className="heading-color-all">Live Project</h4>


                                </ul>









                                <div className="offset-top-20">
                                </div>
                            </div>
                            <div className="offset-top-30">
                                <div className="text-subline"></div>
                                <div className="offset-top-20">
                                </div>
                            </div>
                            <div className="offset-top-30">
                                <div className="text-subline"></div>
                                <div className="offset-top-20">
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-4"><span className="resp-arrow"></span>PHP</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-4" >
                        <div className="inset-lg-left-60">
                            <h2 className="text-bold veil reveal-lg-block">PHP</h2>
                            <div className="offset-lg-top-60"><a href="http://www.piford.in"><img src="images/piford-images/banners/commonpic.png" width="770" height="480" alt="" className="img-responsive reveal-inline-block" /></a></div>
                            <div className="offset-top-30">
                                <p>We provide you best PHP Training Course in Chandigarh, Mohali and Panchkula. The training involved in Web Development. We have best faculty in this region. We are basically the development company having separate division for training, where we give training on Real Live Projects which will give you the flavor of employment. High end meting out systems with internet way in makes the students to study, practice, and work professionally and to clear their fears immediately.</p>
                            </div>
                            <ul className="list list-unstyled list-marked">

                                <h4 className="heading-color-all">HTML 5</h4>

                                <li>What is HTML</li>
                                <li>History of HTML</li>
                                <li>Syntax of HTML</li>
                                <li>HTML5 DocType</li>
                                <li>What is Tags and its types</li>
                                <li>Attributes </li>
                                <li>Title tag</li>
                                <li>Heading tag</li>
                                <li>Line break tag</li>
                                <li>List tag</li>
                                <li>Anchor tag and how to use it in different ways</li>
                                <li>Table tag</li>
                                <li>Image tag</li>
                                <li>Audio tag</li>
                                <li>Video tag</li>
                                <li>iframe tag</li>
                                <li>sup and sub script</li>
                                <li>division tag</li>
                                <li>span tag</li>
                                <li>comments</li>
                                <li>spacing</li>
                                <li>escape characters</li>
                                <li>Working with Forms</li>
                                <li>Form tag</li>
                                <li>Post and get method</li>
                                <li>Form elements</li>
                                <li>Form input type and its attributes</li>

                                <h4 className="heading-color-all">CSS3</h4>

                                <li>Introduction to Cascading Style Sheets</li>
                                <li>Types of Style sheets</li>
                                <li>Types of CSS Selectors</li>
                                <li>CSS properties</li>
                                <li>CSS Type properties</li>
                                <li>Background properties</li>
                                <li>Block properties</li>
                                <li>List properties</li>
                                <li>Border properties</li>
                                <li>Positioning properties</li>
                                <li>CSS Menus</li>
                                <li>CSS Rounded corners</li>

                                <h4 className="heading-color-all">Bootstrap 3</h4>

                                <li>Introduction to bootstrap</li>
                                <li>Grid System</li>
                                <li>Table</li>
                                <li>Images</li>
                                <li>Buttons</li>
                                <li>Glyph icons</li>
                                <li>Pagination</li>
                                <li>Pager</li>
                                <li>List</li>
                                <li>Dropdowns</li>
                                <li>Tabs/pills</li>
                                <li>Navbar</li>
                                <li>Model</li>

                                <h4 className="heading-color-all">Bootstrap 4  <img src="data:image/gif;base64,R0lGODlhFgAHAKEBAAAAAP////+cAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgADACwAAAAAFgAHAAACKRwwhsenD0I4MkopBMhb21lVB0d61/VNZUeB4TRmMme1qepxiQM1z18AACH5BAUKAAMALA0AAQAIAAUAAAIKTGZol8vvnBqzAAAh+QQFCgADACwBAAEABgAFAAACCJQ2pqltvFgBACH5BAUKAAMALAEAAQAMAAUAAAIRTDY2wmynGEovNkqPRAo3VgAAOw==" alt="best android training institute in chandigarh" title="best android training institute in chandigarh" style={{ marginTop: '8px' }} data-pagespeed-url-hash="3317202148" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /></h4>


                                <h4 className="heading-color-all">Java Script and JQuery</h4>

                                <li>Introduction to Java Script and JQuery</li>
                                <li>Syntax of JS and JQ</li>
                                <li>Variables</li>
                                <li>Comments</li>
                                <li>Functions</li>
                                <li>Events</li>
                                <li>Popup boxes</li>
                                <li>Validation</li>
                                <li>Image Sliders</li>
                                <li>Animation</li>
                                <li>Transistion</li>

                                <h4 className="heading-color-all">PHP</h4>

                                <li>Introduction to PHP</li>
                                <li>PHP’s role in Worldwide Web Technology</li>
                                <li>PHP Language Fundamentals</li>
                                <li>PHP basics , Variables</li>
                                <li>Storing &amp; Retrieving information</li>
                                <li>Comparison Operators</li>
                                <li>If , While &amp; For Construct in(statements)</li>
                                <li>PHP Arrays in PHP with</li>
                                <li>Attributes Function in PHP</li>
                                <li>Passing data by reference</li>
                                <li>Variables scope in PHP</li>
                                <li>PHP Web forms</li>
                                <li>POST &amp; GET FROM elements in PHP</li>
                                <li>Embedding forms with PHP code</li>
                                <li>Form validation in PHP</li>
                                <li>Regular Expressions</li>
                                <li>Guidelines for Secure PHP</li>
                                <li>Magic Quotes</li>
                                <li>Setting default value in forms</li>
                                <li>Processing &amp; Retrieving upload</li>
                                <li>files Sending e-mail using PHP with assignment</li>
                                <li>Session handling with assignments</li>
                                <li>Date &amp; Time</li>
                                <li>File handling in PHP</li>
                                <li>Reading, Writing &amp; Copy file with PHP</li>
                                <li>Errors handling in PHP</li>
                                <li>Using Filters &amp; String Functions in PHP</li>
                                <li>Cookie handling with assignment</li>

                                <h4 className="heading-color-all">MySql</h4>

                                <li>Data base Concepts</li>
                                <li>MYSQL Data Types</li>
                                <li>PHP Myadmin</li>
                                <li>Creating Tables</li>
                                <li>Auto_increment and Primary Keys</li>
                                <li>Inserting value into tables</li>
                                <li>Alter, Update table and Delete table</li>
                                <li>Join Tables, Group,Union and Intersect Concepts</li>

                                <h4 className="heading-color-all">Introduction To Advanced Features</h4>

                                <li>Joomla</li>
                                <li>WordPress</li>
                                <li>CakePHP</li>

                                <h4 className="heading-color-all">Introduction to Ajax</h4>

                                <li>Introduction to Ajax</li>
                                <li>Connecting to server using Javascript</li>
                                <li>Creating an XMLHttp Request object in different browser</li>
                                <li>Checking the XMLHttp Request objects status property</li>
                                <li>Checking the XMLHttp Request objects ready state property</li>
                                <li>Getting Data with the XMLHttp Request object</li>
                                <li>Fetching text data from the server</li>
                                <li>Join Tables, Group ,Union and intersect Concepts</li>

                                <h4 className="heading-color-all">Introduction to FTP and Cpanel</h4>
                            </ul>


















                            <div className="offset-top-30"><a href="#" className="btn btn-ellipse btn-primary">Choose a Program</a></div>
                        </div>
                    </div>
                    <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-5"><span className="resp-arrow"></span>Python</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-5">
                        <div className="inset-lg-left-60">
                            <h2 className="text-bold veil reveal-lg-block">Python</h2>
                            <div className="offset-lg-top-60">
                                <p>Python Training Course In Chandigarh
                                    Piford Technologies provide you best Python Training Course in Chandigarh, Mohali and Panchkula. The training involved in Website Development and Desktop Applications. We have best faculty in this region. We are basically the development company having separate division for training, where we give training on Real Live Projects which will give you the flavor of employment. High end meting out systems with internet way in makes the students to study, practice and work professionally and to clear their fears immediately.</p>
                            </div>
                            <div className="offset-top-30"><a href="http://www.piford.in"><img src="images/piford-images/banners/commonpic.png" width="770" height="480" alt="" className="img-responsive reveal-inline-block" /></a></div>


                            <ul className="list list-unstyled list-marked">
                                <h4 className="heading-color-all">Brief History, Installing Python, Setting Environment Variables</h4>
                                <li>Executing Python from Command line and from IDLE</li>
                                <li>Datatypes, Nameing conventions and reserve words</li>
                                <li>Basic Syntax, Comments, Simple programs based on arithematic operations and simple message printing</li>
                                <li>String values , String Operations, String formatting, String operators, String Methods</li>
                                <li>Data conversions, Input from User-input() and raw_input, difference between print and print()</li>
                                <li>Control Flow and Syntax ,indentation, Operators- Arithematic, Logical, Comparison, Identity and Membership operators</li>
                                <li>Loops-for, while, do-while ,Statements- if, if- else</li>
                                <li>Introduction to List,Tuple,Dictionary.</li>
                                <li>List Methods, Dictionary methods-len(), append(),index(), sort() etc</li>
                                <li>Variables- Local and Global</li>
                                <li>Functions- Introduction to functions, defining and Calling Functions, Passing Arguments, Argument types,</li>
                                <li>Passing functions to a functions</li>
                                <li>Modules- how to include module, creating own modules and including them on other pages</li>
                                <li>File Handling- read, readline,readlines,write, writelines.</li>
                                <li>Access Modes -read, write and append mode. Using with statemet, closing file</li>
                                <li>Classes- Introduction to classes, objects, methods</li>
                                <li>Creating classes and Instance methods</li>
                                <li>Special methods</li>
                                <li>class variable and inheritance</li>

                                <h4 className="heading-color-all">Polymorphosm</h4>

                                <li>Custom exception</li>
                                <li>Class documentation-pydoc</li>
                                <li>Exception Handling-Errors, Run time Errors, Exception model</li>
                                <li>Handling multiple exceptions-try, catch,finally</li>

                                <h4 className="heading-color-all">Data Encapsulation</h4>
                                <h4 className="heading-color-all">Access Specifiers</h4>
                                <li>Public</li>
                                <li>Protected</li>
                                <li>Private</li>


                                <h4 className="heading-color-all">Multithreading</h4>

                                <li>Starting a thread</li>
                                <li>Threading module</li>
                                <li>Synchronizing thread</li>
                                <li>Multithreadded priority</li>


                                <h4 className="heading-color-all">Assert And Raise</h4>

                                <li>Writing own exception classes</li>
                                <li>Regular expressions-Simple character matches, Special characters</li>
                                <li>Character classes, Quantifiers, Dot character</li>
                                <li>Greedymatches, Grouping, Substituting, Compiling regular expressions</li>
                                <li>Flags, splitting string</li>

                                <h4 className="heading-color-all">GUI Programming</h4>

                                <li>Introduction to GUI programming</li>
                                <li>Concepts of GUI programming, window,button,menus, radio buttons, checkboxes creation.</li>
                                <li>Practise work on GUI programming</li>
                                <li>Tkinter programming,Tkniter widgets</li>
                                <li>Desktop application</li>

                                <h4 className="heading-color-all">Database</h4>

                                <li>Introduction and establishing connection</li>
                                <li>Executing Queries</li>
                                <li>Transactions</li>
                                <li>Handling errors</li>

                                <h4 className="heading-color-all">CGI Programming</h4>

                                <li>Introduction and Architecture</li>
                                <li>CGI environment variables, html in Python, Website design</li>
                                <li>Get and Post methods, Form validations</li>
                                <li>Cookies and Session</li>
                                <li>File Upload</li>

                                <h4 className="heading-color-all">Socket Programming</h4>

                                <li>Introduction</li>
                                <li>Sockets</li>
                                <li>Socket modules-sending and receiving data to server</li>
                                <li>Methods</li>
                                <li>Client and Server</li>

                                <h4 className="heading-color-all">Internet Module</h4>

                                <li>Practise on Internet module</li>
                                <li>Sendmail</li>

                                <h4 className="heading-color-all">Framework</h4>
                                <h4 className="heading-color-all">Django</h4>
                                <li>Introduction to MVC</li>
                                <li>Starting new Project</li>
                                <li>Creating App</li>
                                <li>Activating App</li>
                                <li>Database Creation</li>
                                <li>Creating Superuser</li>
                                <li>Migrating data to DB</li>
                                <li>Python Shell</li>
                                <li>Creating Templates</li>
                                <li>Connecting Templates to App, Making Project</li>

                            </ul>

                        </div>

                    </div>



                    <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-6"><span className="resp-arrow"></span>Web Designing</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-6">
                        <div className="inset-lg-left-60">
                            <h2 className="text-bold veil reveal-lg-block">Web Designing</h2>
                            <div className="offset-lg-top-60">
                                <p>Web Designing Course In Chandigarh
                                    Piford Technologies provide you best Web Designing Course in Chandigarh, Mohali and Panchkual. We have best faculty in this region. We are basically the development company having separate division for training, where we give training on Real Live Projects which will give you the flavor of employment. High end meting out systems with internet way in makes the students to study, practice and work professionally and to clear their fears immediately.</p>
                            </div>
                            <div className="offset-top-30"><a href="http://www.piford.in"><img src="images/piford-images/banners/commonpic.png" width="770" height="480" alt="" className="img-responsive reveal-inline-block" /></a></div>




                            <ul className="list list-unstyled list-marked">
                                <h4 className="heading-color-all">HTML 5</h4>
                                <li>What is HTML</li>
                                <li>History of HTML</li>
                                <li>Syntax of HTML</li>
                                <li>HTML5 DocType</li>
                                <li>What is Tags and its types</li>
                                <li>Attributes </li>
                                <li>Title tag</li>
                                <li>Heading tag</li>
                                <li>Line break tag</li>
                                <li>List tag</li>
                                <li>Anchor tag and how to use it in different ways</li>
                                <li>Table tag</li>
                                <li>Image tag</li>
                                <li>Audio tag</li>
                                <li>Video tag</li>
                                <li>iframe tag</li>
                                <li>sup and sub script</li>
                                <li>division tag</li>
                                <li>span tag</li>
                                <li>comments</li>
                                <li>spacing</li>
                                <li>escape characters</li>
                                <li>Working with Forms</li>
                                <li>Form tag</li>
                                <li>Post and get method</li>
                                <li>Form elements</li>
                                <li>Form input type and its attributes</li>

                                <h4 className="heading-color-all">CSS3</h4>

                                <li>Introduction to Cascading Style Sheets</li>
                                <li>Types of Style sheets</li>
                                <li>Types of CSS Selectors</li>
                                <li>CSS properties</li>
                                <li>CSS Type properties</li>
                                <li>Background properties</li>
                                <li>Block properties</li>
                                <li>List properties</li>
                                <li>Border properties</li>
                                <li>Positioning properties</li>
                                <li>CSS Menus</li>
                                <li>CSS Rounded corners</li>

                                <h4 className="heading-color-all">Bootstrap 3</h4>

                                <li>Introduction to bootstrap</li>
                                <li>Grid System</li>
                                <li>Table</li>
                                <li>Images</li>
                                <li>Buttons</li>
                                <li>Glyph icons</li>
                                <li>Pagination</li>
                                <li>Pager</li>
                                <li>List</li>
                                <li>Dropdowns</li>
                                <li>Tabs/pills</li>
                                <li>Navbar</li>
                                <li>Model</li>



                                <h4 className="heading-color-all">Bootstrap 4  <img src="data:image/gif;base64,R0lGODlhFgAHAKEBAAAAAP////+cAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgADACwAAAAAFgAHAAACKRwwhsenD0I4MkopBMhb21lVB0d61/VNZUeB4TRmMme1qepxiQM1z18AACH5BAUKAAMALA0AAQAIAAUAAAIKTGZol8vvnBqzAAAh+QQFCgADACwBAAEABgAFAAACCJQ2pqltvFgBACH5BAUKAAMALAEAAQAMAAUAAAIRTDY2wmynGEovNkqPRAo3VgAAOw==" alt="best android training institute in chandigarh" title="best android training institute in chandigarh" style={{ marginTop: '8px' }} data-pagespeed-url-hash="3317202148" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /></h4>

                                <h4 className="heading-color-all">Java Script and JQuery</h4>

                                <li>Introduction to Java Script and JQuery</li>
                                <li>Syntax of JS and JQ</li>
                                <li>Variables</li>
                                <li>Comments</li>
                                <li>Functions</li>
                                <li>Events</li>
                                <li>Popup boxes</li>
                                <li>Validation</li>
                                <li>Image Sliders</li>
                                <li>Animation</li>

                                <h4 className="heading-color-all"> Adobe Photoshop</h4>

                                <li>Types of Images</li>
                                <li>Vector Graphics and tools</li>
                                <li>Scalar Graphics and tools</li>
                                <li>Introduction to adobe Photoshop</li>
                                <li>Color mode and resolution option</li>
                                <li>File types in Photoshop</li>
                                <li>Photoshop tools</li>
                                <li>Working with layers and smart objects</li>
                                <li>Image adjustments</li>
                                <li>Blending option to create amazing effects</li>
                                <li>View menu</li>
                                <li>Filter effects</li>
                                <li>Brochure designing</li>
                                <li>Designing a logo</li>
                                <li>Creating a Business Card</li>
                                <li>Design banners for website</li>
                                <li>What’s new in PS CS 6.0</li>


                                <h4 className="heading-color-all">Illustrator</h4>

                                {/* <!--<li>Introduction to Corel draw</li>
                                                                    <li>Features of Corel draw </li>
                                                                    <li>Corel draw interface</li>
                                                                    <li>Tool box</li>
                                                                    <li>Common tasks</li>
                                                                    <li>Drawing and coloring</li>
                                                                    <li>Selecting Objects</li>
                                                                    <li>Creating Basic Shapes</li>
                                                                    <li>Reshaping Objects</li>
                                                                    <li>Organizing objects</li>
                                                                    <li>Appling color fills and outlines</li>
                                                                    <li>Editing Bitmaps</li>
                                                                    <li>Exporting files</li>
                                                                    <li>Creating buttons</li>
                                                                    <li>Text tools</li>
                                                                    <li>Formatting text</li>
                                                                    <li>Appling effects</li>
                                                                    <li>Power of blends</li>
                                                                    <li>Lens effects</li>
                                                                    <li>Transparency</li>
                                                                    <li>Creating depth effects</li>--> */}

                            </ul>

                        </div>

                    </div>
                    {/* </div> */}


                    <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-7"><span className="resp-arrow"></span>Big Data</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-7">
                        <div className="inset-lg-left-60">
                            <h2 className="text-bold veil reveal-lg-block">Big Data</h2>
                            <div className="offset-lg-top-60">
                                <p>Piford Technologies provide you best Big Data Training Course in Chandigarh, mohali and panchkula . We have best faculty in this region. We are basically the development company having separate division for training, where we give training on Real Live Projects which will give you the flavor of employment. High end meting out systems with internet way in makes the students to study, practice and work professionally and to clear their fears immediately.</p>
                            </div>
                            <div className="offset-top-30"><a href="http://www.piford.in"><img src="images/piford-images/banners/commonpic.png" width="770" height="480" alt="" className="img-responsive reveal-inline-block" /></a></div>
                            <div className="offset-top-30">
                                <h6 className="text-bold">Skills and Tools</h6>
                                <div className="text-subline"></div>
                                <div className="offset-top-20">
                                    <ul className="list list-unstyled list-marked">
                                        <h4 className="heading-color-all">Module 1 : Introduction To Big Data</h4>
                                        <li>The four dimensions of Big Data: volume, velocity, variety, veracity</li>
                                        <li>Introducing the Storage, MapReduce and Query Stack</li>
                                        <li>Establishing the business importance of Big Data</li>
                                        <li>Addressing the challenge of extracting useful data</li>
                                        <li>Integrating Big Data with traditional data</li>

                                        <h4 className="heading-color-all">Module 2 : Overview Of Big Data Stores</h4>
                                        <li>Data models: key value, graph, document, column–family</li>
                                        <li>Hadoop Distributed File System</li>
                                        <li>HBase</li>
                                        <li>Hive</li>
                                        <li>Cassandra</li>
                                        <li>Hypertable</li>
                                        <li>Amazon S3</li>
                                        <li>BigTable</li>
                                        <li>DynamoDB</li>
                                        <li>MongoDB</li>
                                        <li>Redis</li>
                                        <li>Riak</li>
                                        <li>Neo4J</li>
                                        <h4 className="heading-color-all">Module 3 : Processing Big Data</h4>
                                        <li>Integrating disparate data stores</li>
                                        <li>Employing Hadoop MapReduce</li>
                                        <li>Employing Hadoop MapReduce</li>
                                        <li>Handling streaming data</li>
                                        <h4 className="heading-color-all">Module 4 : Tools And Techniques To Analyze Big Data</h4>
                                        <li>Abstracting Hadoop MapReduce jobs with Pig</li>
                                        <li>Performing ad hoc Big Data querying with Hive</li>
                                        <li>Creating business value from extracted data</li>
                                        <h4 className="heading-color-all">Module 5 : Developing A Big Data Strategy</h4>
                                        <li>Establishing your Big Data needs</li>
                                        <li>Meeting business goals with timely data</li>
                                        <li>Evaluating commercial Big Data tools</li>
                                        <li>Managing organizational expectations</li>
                                        <li>Focusing on business importance</li>
                                        <li>Framing the problem</li>
                                        <li>Selecting the correct tools</li>
                                        <h4 className="heading-color-all">Module 6 : Implementing A Big Data Solution</h4>
                                        <li>Selecting suitable vendors and hosting options</li>
                                        <li>Balancing costs against business value</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-8"><span className="resp-arrow"></span>Hadoop</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-8">
                        <div className="inset-lg-left-60">
                            <h2 className="text-bold veil reveal-lg-block">Hadoop</h2>
                            <div className="offset-lg-top-60">
                                <p>Piford Technologies provide you best Hadoop Training Course In Chandigarh, mohali and panchkula . We have best faculty in this region. We are basically the development company having separate division for training where we give training on Real Live Projects which will give you the flavor of employment. High end meting out systems with internet way in makes the students to study, practice and work professionally and to clear their fears immediately.</p>
                            </div>
                            <div className="offset-top-30"><a href="http://www.piford.in"><img src="images/piford-images/banners/commonpic.png" width="770" height="480" alt="" className="img-responsive reveal-inline-block" /></a></div>
                            <div className="offset-top-30">
                                <h6 className="text-bold">Skills and Tools</h6>
                                <div className="text-subline"></div>
                                <div className="offset-top-20">
                                    <ul className="list list-unstyled list-marked">

                                        <h4 className="heading-color-all">Module 1 : Hadoop</h4>
                                        <li>Why Hadoop?</li>
                                        <li>What is Hadoop?</li>
                                        <li>Hadoop vs RDBMS, Hadoop vs BigData</li>
                                        <li>Brief history of Hadoop</li>
                                        <li>Problems with traditional large-scale systems</li>
                                        <li>Requirements for a new approach</li>
                                        <li>Anatomy of a Hadoop cluster</li>
                                        <h4 className="heading-color-all">Module 2 : HDFS (Hadoop Distributed File System)</h4>
                                        <li>Installation</li>
                                        <li>Concepts &amp; Architecture</li>
                                        <li>Data Flow (File Read , File Write)</li>
                                        <li>Fault Tolerance</li>
                                        <li>Shell Commands</li>
                                        <li>Java Base API</li>
                                        <li>Data Flow Archives</li>
                                        <li>Coherency</li>
                                        <li>Data Integrity</li>
                                        <li>Role of Secondary NameNode</li>
                                        <h4 className="heading-color-all">Module 3 : Map Reduce</h4>
                                        <li>Data Flow (Map – Shuffle – Reduce)</li>
                                        <li>MapRed vs MapReduce APIs</li>
                                        <li>Programming [ Mapper, Reducer, Combiner, Partitioner</li>
                                        <h4 className="heading-color-all">Module 4 : HIVE &amp; PIG</h4>
                                        <li>Architecture</li>
                                        <li>Installation</li>
                                        <li>Configuration</li>
                                        <li>Hive vs RDBMS</li>
                                        <li>Tables</li>
                                        <li>DDL &amp; DML</li>
                                        <li>Partitioning &amp; Bucketing</li>
                                        <li>Hive Web Interface</li>
                                        <li>Why Pig</li>
                                        <li>Use case of Pig</li>
                                        <li>Pig Components</li>
                                        <li>Data Model</li>
                                        <li>Pig Latin</li>
                                        <h4 className="heading-color-all">Module 5 : HBase</h4>
                                        <li>RDBMS Vs NoSQL</li>
                                        <li>HBase Introduction</li>
                                        <li>HBase Components Scanner</li>
                                        <li>Filter Hbase POC</li>
                                        <h4 className="heading-color-all">Module 6 : Flume</h4>
                                        <h4 className="heading-color-all">Module 7 : Sqoop</h4>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-9"><span className="resp-arrow"></span>Machine Learning with Python</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-9">
                        <div className="inset-lg-left-60">
                            <h2 className="text-bold veil reveal-lg-block">Machine Learning with Python</h2>
                            <div className="offset-lg-top-60">
                                <p>Machine Learning With Python Training Course In Chandigarh
                                    Piford Technologies provide you best Machine Learning Training Course in Chandigarh, Mohali and Panchkula. The training helps you learning Data Analysis. We have best faculty in this region. We are basically the development company having separate division for training, where we give training on Real Live Projects which will give you the flavor of employment. High end meting out systems with internet way in makes the students to study, practice and work professionally and to clear their fears immediately.</p>
                            </div>

                            <div className="offset-top-30">
                                <h6 className="text-bold">Course Description</h6>
                                <div className="text-subline"></div>
                                <div className="offset-top-20">
                                    <ul className="list list-unstyled list-marked">
                                        <li>What is Data Science?</li>
                                        <li>What does Data Science involve?</li>
                                        <li>Era of Data Science</li>
                                        <li>Business Intelligence vs Data Science</li>
                                        <li>Life cycle of Data Science</li>
                                        <li>Tools of Data Science</li>
                                        <li>Introduction to Python<ul>
                                            <li>Python Basics</li>
                                            <li>Python Numpy</li>
                                            <li>Python Pandas</li>
                                            <li>Python Matplotlib</li>
                                            <li>Python Sckit, Sklearn and scipy</li></ul></li>
                                        <li>Data Analysis Pipeline</li>
                                        <li>What is Data Extraction</li>
                                        <li>Types of Data<ul>
                                            <li>Structred</li>
                                            <li>Semi Structred</li>
                                            <li>UnStructred</li></ul></li>
                                        <li>Raw and Processed Data</li>
                                        <li>Data Wrangling</li>
                                        <li>What is Machine Learning?</li>
                                        <li>Machine Learning Process Flow</li>
                                        <li>Data Pre-Processing<ul>
                                            <li>Introduction to Dimensionality</li>
                                            <li>Why Dimensionality Reduction</li>
                                            <li>PCA</li>
                                            <li>Feature Scaling by different scaling methods</li>
                                            <li>Data Scaling by different scaling methods</li></ul></li>
                                        <li>Supervised Learning<ul>
                                            <li>Classification Algorithms - Will work on Atleast 5 classification Models</li>
                                            <li>Regression Algorithms -  Will work on 5 Regression models which include DT,RF</li></ul></li>
                                        <li>Unsupervised Learning<ul>
                                            <li>What is Clustering &amp; its Use Cases?</li>
                                            <li>Clusterning Algorithms</li>
                                        </ul></li>

                                        <li>Project Work</li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-10"><span className="resp-arrow"></span>Deep Learning</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-10">
                        <div className="inset-lg-left-60">
                            <h2 className="text-bold veil reveal-lg-block">Deep Learning with Tensorflow</h2>
                            <div className="offset-lg-top-60">
                                <p>If you want to break into AI, Piford Technology will help you do so. Deep Learning is one of the most highly sought after skills in tech. We will help you become good at Deep Learning. You will learn about Convolutional networks, RNNs, LSTM, Adam, Dropout, BatchNorm, Xavier/He initialization, and more. You will work on case studies from healthcare, autonomous driving, sign language reading, music generation, and natural language processing.

                                </p>

                                <p>AI is transforming multiple industries. After finishing this specialization, you will likely find creative ways to apply it to your work. This course also teaches you how Deep Learning actually works. If you are looking for a job in AI, after this course you will also be able to answer basic interview questions. </p>


                            </div>

                            <div className="offset-top-30">
                                <h6 className="text-bold">Deep Learning with TensorFlow</h6>
                                <div className="text-subline"></div>
                                <div className="offset-top-20">
                                    <ul className="list list-unstyled list-marked">





                                        <h4 className="heading-color-all"></h4>



                                        <p>The components of a deep neural network and how they work together.</p>





                                        <li>What is Data Science?</li>
                                        <li>What does Data Science involve?</li>
                                        <li>Era of Data Science</li>
                                        <li>Business Intelligence vs Data Science</li>
                                        <li>Life cycle of Data Science</li>
                                        <li>Tools of Data Science</li>
                                        <li>Introduction to Python<ul>
                                            <li>Python Basics</li>

                                            <li>Python Sckit, Sklearn and scipy</li></ul></li>
                                        <li>Data Analysis Pipeline</li>
                                        <li>What is Data Extraction</li>
                                        <li>Data Wrangling</li>
                                        <li>What is Deep Learning Learning?</li>
                                        <li>Deep Learning Process Flow</li>
                                        <li>Data Pre-Processing<ul>
                                            <li>Introduction to Dimensionality</li>
                                            <li>Why Dimensionality Reduction</li>
                                            <li>PCA</li>
                                            <li>Feature Scaling by different scaling methods</li>
                                            <li>Data Scaling by different scaling methods</li>






                                            <li>The basic types of deep neural networks (MLP, CNN, RNN, LSTM) and the type of data each is designed for</li>
                                            <li>A working knowledge of vocabulary, concepts, and algorithms used in deep learning</li>
                                            <h4>How to build:</h4>
                                            <li>An end-to-end model for recognizing hand-written digit images, using a multi-class Logistic Regression and MLP (Multi-Layered Perceptron)</li>
                                            <li>A CNN (Convolution Neural Network) model for improved digit recognition</li>
                                            <li>An RNN (Recurrent Neural Network) model to forecast time-series data</li>
                                            <li>An LSTM (Long Short Term Memory) model to process sequential text data</li>

                                        </ul>
                                        </li></ul></div>
                            </div>
                        </div>
                    </div>

                    <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-11"><span className="resp-arrow"></span>Ethical Hacking</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-11">
                        <div className="inset-lg-left-60">
                            <h2 className="text-bold veil reveal-lg-block">Ethical Hacking</h2>
                            <div className="offset-lg-top-60">
                                <p>If you are considering working in the Ethical hacking industry, then this training will benefit you greatly. With Piford’s  Ethical Hacking Course, you will learn how to protect users from cyber attackers by becoming an ethical hacker and learning to exploit networks yourself.</p>
                            </div>

                            <div className="offset-top-30">
                                <h6 className="text-bold">Ethical Hacking</h6>
                                <div className="text-subline"></div>
                                <div className="offset-top-20">
                                    <ul className="list list-unstyled list-marked">
                                        <h4 className="heading-color-all"></h4>






                                        <li>Module 01 - Phases of Penetration Testing</li>
                                        <li>Module 02 - Footprinting</li>



                                        <li>Module 03 - Scanning</li>

                                        <li>Module 04 - Enumeration</li>


                                        <li>Module 05 - System Hacking</li>

                                        <li>Module 06 - Trojans</li>

                                        <li>Module 07 - Viruses &amp; Worms</li>

                                        <li>Module 08 - Sniffing Traffic</li>

                                        <li>Module 09 - Social Engineering</li>

                                        <li>Module 10 - Session Hijacking</li>

                                        <li>Module 11 - Web Applications </li>

                                        <li>Module 12 - SQL Injection</li>

                                        <li>Module 13 - IDS, Firewalls</li>


















                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-12"><span className="resp-arrow"></span>Cyber Security</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-12">
                        <div className="inset-lg-left-60">
                            <h2 className="text-bold veil reveal-lg-block">Cyber Security</h2>
                            <div className="offset-lg-top-60">
                                <p>Cyber security is the information technology field associated with the security of computer systems and information. It encompasses threats to computer hardware, software and data including theft, hacking, viruses and more. The computer security field has grown immensely as more devices become internet-enabled and more services move online.The course is beneficial to get knowledge of security mechanisms, standards, and state-of-the-art capabilities; they      will also be able to design new systems and infrastructure-level security solutions.</p>
                            </div>

                            <div className="offset-top-30">
                                <h6 className="text-bold">Cyber Security</h6>
                                <div className="text-subline"></div>
                                <div className="offset-top-20">
                                    <ul className="list list-unstyled list-marked">
                                        <h4 className="heading-color-all"></h4>




                                        <h4 className="heading-color-all">Module 01 - Introduction</h4>


                                        <h4 className="heading-color-all">Module 02 - Principle of least privilege, access control, and operating systems security</h4>
                                        <h4 className="heading-color-all">Module 03 - Dealing with legacy code: sandboxing and isolation</h4>




                                        <h4 className="heading-color-all">Module 04 - Exploitation techniques and fuzzing</h4>


                                        <h4 className="heading-color-all">Module 05 - Overview of cryptography</h4>

                                        <h4 className="heading-color-all">Module 06 - Basic web security model  </h4>

                                        <h4 className="heading-color-all">Module 07 - HTTPS: goals and pitfalls</h4>

                                        <h4 className="heading-color-all">Module 08 - Web application security</h4>

                                        <h4 className="heading-color-all">Module 09 - Session management and user authentication </h4>

                                        <h4 className="heading-color-all">Module 10 - Content Security Policies (CSP), Web workers, and extensions</h4>

                                        <h4 className="heading-color-all">Module 11 -Network security </h4>


                                        <h4 className="heading-color-all">Module 12 - Security issues in Internet protocols: TCP, DNS, and routing</h4>

                                        <h4 className="heading-color-all">Module 13 - Network defense tools: Firewalls, VPNs, Intrusion Detection, and filters</h4>


                                        <h4 className="heading-color-all">Module 14 - Unwanted traffic: denial of service attacks</h4>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-13"><span className="resp-arrow"></span>Data Science</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-13">
                        <div className="inset-lg-left-60">
                            <h2 className="text-bold veil reveal-lg-block">Data Science</h2>
                            <div className="offset-lg-top-60">
                                <p>                      </p><p>
                                    Piford Technologies provide you the best Python for Data Science training course in chandigarh, mohali and panchkula.This Python for Data Science training course will enable you to:
                                    Gain an in-depth understanding of data science processes, data wrangling, data exploration, data visualization, hypothesis building, and testing. You will also learn the basics of statistics.
                                    Install the required Python environment and other auxiliary tools and libraries
                                    Understand the essential concepts of Python programming such as data types, tuples, lists, dicts, basic operators and functions
                                    Perform high-level mathematical computing using the NumPy package and its large library of mathematical functions
                                    Perform scientific and technical computing using the SciPy package and its sub-packages such as Integrate, Optimize, Statistics, IO and Weave
                                    Perform data analysis and manipulation using data structures and tools provided in the Pandas package
                                    Gain expertise in machine learning using the Scikit-Learn package

                                    .</p>
                            </div>

                            <div className="offset-top-30">
                                <h6 className="text-bold">Course Description</h6>
                                <div className="text-subline"></div>
                                <div className="offset-top-20">
                                    <ul className="list list-unstyled list-marked">
                                        <h4 className="heading-color-all"></h4>



                                        <h4 className="heading-color-all"> Data Science Overview</h4>

                                        <li>Introduction to Data Science </li>

                                        <h4 className="heading-color-all">Python Basics</h4>
                                        <li>List </li>
                                        <li>Tuple </li>
                                        <li>Dictionary</li>
                                        <li>Functions</li>
                                        <li>Modules</li>
                                        <h4 className="heading-color-all">Python for Data Science</h4>
                                        <li>Numpy </li>
                                        <li>Pandas </li>
                                        <li>Scikit or Sklearn </li>
                                        <li>Scipy </li>
                                        <li>Matplotlib</li>
                                        <h4 className="heading-color-all">Machine Learning</h4>


                                        <li>What is Machine Learning?</li>
                                        <li>Machine Learning Process Flow</li>
                                        <li>Data Pre-Processing<ul>
                                            <li>Introduction to Dimensionality</li>
                                            <li>Why Dimensionality Reduction</li>
                                            <li>PCA</li>
                                            <li>Feature Scaling by different scaling methods</li>
                                            <li>Data Scaling by different scaling methods</li></ul></li>
                                        <li>Supervised Learning<ul>
                                            <li>Classification Algorithms - Will work on Atleast 5 classification Models</li>
                                            <li>Regression Algorithms -  Will work on 5 Regression models which include DT,RF</li></ul></li>
                                        <li>Unsupervised Learning<ul>
                                            <li>What is Clustering &amp; its Use Cases?</li>
                                            <li>Clusterning Algorithms</li>

                                            <h4 className="heading-color-all">Big Data</h4>
                                            <li>What is Data Extraction</li>
                                            <li>Types of Data<ul>
                                                <li>Structred</li>
                                                <li>Semi Structred</li>
                                                <li>UnStructred</li></ul></li>
                                            <li>Raw and Processed Data</li>
                                            <li>Data Wrangling</li>
                                            <li>Web Scraping- Facebook</li>
                                            <li>Web Scraping- Twitter</li>
                                            <li>Data Munging</li>

                                            <h4 className="heading-color-all">Databases</h4>
                                            <li>Relational Database</li>
                                            <li>Document Database</li>
                                            <li>Unstructred Database</li>

                                            <h4 className="heading-color-all">Hadoop</h4>
                                            <li>HDFS</li>
                                            <li>Map Reduce</li>
                                            <li>Pig</li>
                                            <li>Hive</li>
                                            <li>Hbase</li>
                                            <li>Sqoop</li>
                                            <li>Flume</li>
                                            <li>Zookeeper</li>







                                        </ul>
                                        </li></ul></div>
                            </div>
                        </div>
                    </div>

                    <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-14"><span className="resp-arrow"></span>Data Analytics</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-14">
                            <div className="inset-lg-left-60">
                                    <h2 className="text-bold veil reveal-lg-block">Data Analytics</h2>
                                    <div className="offset-lg-top-60">
                                        <p>  - Data Analytics, being niche area has transformed businesses and their ability to make smarter decisions. It has been a career by choice, giving an edge to stay ahead. The corporate world has evolved new positions – “Chief Analytics Officer” at selection cadres, framing highly remunerative career path. For a fast track to success, the right time to specialize is now. Analytics as a career choice requires knowledge &amp; skills from an extremely diverse set of fields: mathematics, statistics, economics, econometrics, IT, marketing, finance, HR, and domain knowledge and of course, a set of software tools. Almost anyone with a passion for the numbers can get in, but develop the requisite proficiency in using the data. It is certainly not just about tools or technologies, but an orientation towards logical analytical thinking based on the knowledge, tools, and technologies to extract valuable insights from data. The learnings in key computing skill-sets are well demonstrated by the proficiency in Visualization &amp; Business skills</p>
                                    </div>

                                <div className="offset-top-30">
                                    <h6 className="text-bold">Data Analysis</h6>
                                    <div className="text-subline"></div>
                                        <div className="offset-top-20">
                                            <ul className="list list-unstyled list-marked">
                                                <h4 className="heading-color-all"></h4>
                                                <li>What is Data Analytics?</li>
                                                <li>What does Data Analytics involve?</li>


                                                <li>Life cycle of Data Analytics</li>
                                                <li>Tools of Data Analytics</li>
                                                <li>Introduction to Python<ul>
                                                    <li>Python Basics</li>
                                                    <li>Python Numpy</li>
                                                    <li>Python Pandas</li>
                                                    <li>Python Matplotlib</li>
                                                    <li>Python Sckit, Sklearn and scipy</li></ul></li>

                                                <h6 className="text-bold">Big Data</h6>
                                                <li>What is Data Extraction</li>
                                                <li>Types of Data<ul>
                                                    <li>Structred</li>
                                                    <li>Semi Structred</li>
                                                    <li>UnStructred</li></ul></li>
                                                <li>Raw and Processed Data</li>
                                                <li>Data Wrangling</li>
                                                <li>Data Munging</li>
                                                <li>Web Scraping-Facebook,Twitter</li>

                                                <h6 className="text-bold">Machine Learning</h6>
                                                <li>What is Machine Learning?</li>
                                                <li>Machine Learning Process Flow</li>
                                                <li>Data Pre-Processing<ul>
                                                    <li>Introduction to Dimensionality</li>
                                                    <li>Why Dimensionality Reduction</li>
                                                    <li>PCA</li>
                                                    <li>Feature Scaling by different scaling methods</li>
                                                    <li>Data Scaling by different scaling methods</li></ul></li>
                                                <li>Supervised Learning<ul>
                                                    <li>Classification Algorithms - Will work on Atleast 5 classification Models</li>
                                                    <li>Regression Algorithms -  Will work on 5 Regression models which include DT,RF</li></ul></li>
                                                <li>Association Rule mining.</li>

                                                <li>Unsupervised Learning<ul>
                                                    <li>What is Clustering &amp; its Use Cases?</li>
                                                    <li>Clusterning Algorithms</li>
                                                </ul></li>

                                                <li>Project Work</li>


                                            </ul>
                                        </div>
                                    </div>
                            </div>
                    </div>


                    <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-15"><span className="resp-arrow"></span>.Net</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-15">
                        <div className="inset-lg-left-60">
                            <h2 className="text-bold veil reveal-lg-block">.Net</h2>
                            <div className="offset-lg-top-60">
                                <p>Piford Technologies provide you best Dot Net Training Course in Chandigarh, Mohali and Panchkula . We have best faculty in this region. We are basically the development company having separate division for training where we give training on real time projects which will give you the flavor of employment. High end meting out systems with internet way in makes the students to study, practice, and work professionally and to clear their fears immediately.</p>
                            </div>
                            <div className="offset-top-30"><a href="http://www.piford.in"><img src="images/piford-images/banners/commonpic.png" width="770" height="480" alt="" className="img-responsive reveal-inline-block" /></a></div>
                            <div className="offset-top-30">
                                <h6 className="text-bold">Skills and Tools</h6>
                                <div className="text-subline"></div>
                                <div className="offset-top-20">
                                    <ul className="list list-unstyled list-marked">
                                        <h4 className="heading-color-all">.Net Framework With C# Language</h4>
                                        <li>.Net Enterprise Architecture 4.0</li>
                                        <li>Introduction to .Net Framework ( CLR, CTS,JIT,MSIL)</li>
                                        <li>Basic Concept Of Programing Language</li>
                                        <li>Introduction To Visual Studio 2010</li>
                                        <li>Overview of OOPS</li>
                                        <li>Objects Oriented programming in C#</li>
                                        <li>Objects &amp; Classes</li>
                                        <li>Abstraction &amp; Encapsulation</li>
                                        <li>Polymorphism &amp; Inheritance</li>
                                        <li>Interface &amp; Abstract Class</li>
                                        <li>Delegates and Events</li>
                                        <li>Exception Handling</li>
                                        <li>Collection Framework &amp; Generics</li>
                                        <li>File Handling/IO Operations</li>
                                        <li>Threading/Multi Threading</li>
                                        <li>Reflaction</li>
                                        <li>Remoting</li>
                                        <h4 className="heading-color-all">.Net Framework With C# Language</h4>
                                        <li>Introduction to Windows Forms user Interface</li>
                                        <li>Common Windows Form Controls</li>
                                        <li>Complex Windows Form Controls</li>
                                        <li>Menu and Toolbars</li>
                                        <li>Dialog Boxes</li>
                                        <li>MDI Form</li>
                                        <li>Custom Controls</li>
                                        <li>Validation in Window Forms</li>
                                        <h4 className="heading-color-all">Ado.Net</h4>
                                        <li>.Net data providers</li>
                                        <li>Programing with .Net Interfaces</li>
                                        <li>Net class Libraries</li>
                                        <li>Using SqlConnection</li>
                                        <li>Using SqlCommand</li>
                                        <li>Using DataReader</li>
                                        <li>Using DataSet</li>
                                        <li>Using Adapter</li>
                                        <li>Using XML with a DataSet</li>
                                        <h4 className="heading-color-all">Asp.Net</h4>
                                        <li>Introduction to Asp.Net</li>
                                        <li>Interacting with Internet and IIS</li>
                                        <li>Working with web forms</li>
                                        <li>Difference between HTML and Web Server Controls</li>
                                        <li>Net Page Life Cycle</li>
                                        <li>Standard Controls</li>
                                        <li>Validation Controls</li>
                                        <li>Master Page,Theme and Style</li>
                                        <h4 className="heading-color-all">Data Base Interaction In Asp.Net</h4>
                                        <li>Data Bounds Controls</li>
                                        <li>Composite Data Bounds Controls</li>
                                        <li>Crysal Report</li>
                                        <li>Crystal Report Using Web Services</li>
                                        <li>Linq in a Nutshell</li>
                                        <h4 className="heading-color-all">Asynchronus Programing In Asp.Net</h4>
                                        <li>Ajax Client/Server site tools</li>
                                        <li>Using Ajax Calling Webservices</li>
                                        <h4 className="heading-color-all">State Management</h4>
                                        <li>Mailing using SMTP</li>
                                        <li>Navigation Controls</li>
                                        <li>Site Navigation using xml datasource and Site Map datasource</li>
                                        <li>Security In Asp.Net</li>
                                        <li>Role Based Security</li>
                                        <li>Managing users with Asp.Net membership</li>
                                        <li>XML web services</li>
                                        <h4 className="heading-color-all">Asp.Net MVC 4</h4>
                                        <li>What is Asp.Net Mvc and how it is different from web forms</li>
                                        <li>What are Controllers How they get Invoked and how dothey accept input</li>
                                        <li>How Does Model Bindink work</li>
                                        <li>How can I build validation in to my Application</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-16"><span className="resp-arrow"></span>CCNA</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-16">
                            <div className="inset-lg-left-60">
                                <h2 className="text-bold veil reveal-lg-block">CCNA</h2>
                                <div className="offset-lg-top-60">
                                    <p> Syllabus updation work going on. Please check after some time</p>
                                </div>

                                <div className="offset-top-30">
                                    <h6 className="text-bold">Course Description</h6>
                                    <div className="text-subline"></div>
                                    <div className="offset-top-20">
                                        <ul className="list list-unstyled list-marked">
                                            <h4 className="heading-color-all">CCNA</h4>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-17"><span className="resp-arrow"></span>C++</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-17">
                            <div className="inset-lg-left-60">
                                <h2 className="text-bold veil reveal-lg-block">C++</h2>
                                <div className="offset-lg-top-60">
                                    <p>Piford Technologies provide you best C Plus Plus Training Course In Chandigarh, Mohali and Panchkula . We have best faculty in this region. We are basically the development company having separate division for training where we give training on real time projects which will give you the flavor of employment. High end meting out systems with internet way in makes the students to study, practice, and work professionally and to clear their fears immediately.</p>
                                </div>
                                <div className="offset-top-30"><a href="http://www.piford.in"><img src="images/piford-images/banners/commonpic.png" width="770" height="480" alt="" className="img-responsive reveal-inline-block" /></a></div>
                                    <div className="offset-top-30">
                                        <h6 className="text-bold">Skills and Tools</h6>
                                        <div className="text-subline"></div>
                                            <div className="offset-top-20">
                                                <ul className="list list-unstyled list-marked">
                                                    <h4 className="heading-color-all">Introduction</h4>
                                                    <li>C++ Development IDE: Visual Studio 2010</li>
                                                    <li>Understanding datatype &amp; variables in C++</li>
                                                    <li>Understanding Identifiers, Characters &amp; Strings</li>
                                                    <h4 className="heading-color-all">Programs Implementation &amp; Self Practice</h4>
                                                    <li>User Defined Datatypes</li>
                                                    <li>Implementing constants and Enumerations</li>
                                                    <li>Understanding Boolean Expression, Operators and Assignment </li>
                                                    <li>statements</li>
                                                    <li>Type casting in C++</li>
                                                    <h4 className="heading-color-all">Programs Implementation &amp; Self Practice</h4>
                                                    <li>Implementing Structures in C++</li>
                                                    <li>Implementing functions in C++</li>
                                                    <li>Introduction to OOPs, Classes in OOPs</li>
                                                    <li>Implementing Objects in C++ : Concept of “NEW” and “DELETE”</li>
                                                    <h4 className="heading-color-all">Programs Implementation &amp; Self Practice</h4>
                                                    <li>Implementing/Coding conditional construct and looping</li>
                                                    <li>Implementing/Coding abstraction and encapsulation</li>
                                                    <li>Implementing/Coding static variables and function</li>
                                                    <li>Implementing/Coding static polymorphism (function, constructor overloading)</li>
                                                    <h4 className="heading-color-all">PROJECT WORK</h4>
                                                    <li>Implementing/Coding dynamic polymorphism (abstract classes and interface)-1</li>
                                                    <li>Understanding 2D Arrays in C++</li>
                                                    <li>Branch and Loop statements: For loop, While, do…while</li>
                                                    <li>IF Else statements and Switch Case in C++</li>
                                                    <h4 className="heading-color-all">PROJECT WORK</h4>
                                                    <li>Introduction to Pointers in c++</li>
                                                    <li>Passing variables by Value and Reference</li>
                                                    <li>Implementing Recursion &amp; Linked Lists in C++</li>
                                                    <li>File Handling in C++</li>
                                                    <h4 className="heading-color-all">PROJECT WORK</h4>
                                                    <li>Debugging in C++</li>
                                                    <li>Advanced File Handling concepts in C++</li>
                                                    <li>Reading and writing in files</li>
                                                    <li>Introduction to graphics in C++</li>
                                                    <h4 className="heading-color-all">PROJECT WORK</h4>
                                                    <li>Designing layouts using C++</li>
                                                    <li>Integrating C++ code with the database – 1</li>
                                                    <li>Integrating C++ code with the database – 2</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="resp-accordion tabs-lg-collapsed" role="tab" aria-controls="tabs-lg-collapsed_tab_item-18"><span className="resp-arrow"></span>C</div><div className="view-animate zoomInSmall resp-tab-content tabs-lg-collapsed active" aria-labelledby="tabs-lg-collapsed_tab_item-18">
                                <div className="inset-lg-left-60">
                                    <h2 className="text-bold veil reveal-lg-block">C</h2>
                                    <div className="offset-lg-top-60">
                                        <p>Piford Technologies provide you best C Training Course in Chandigarh, Mohali and Panchkula. We have best faculty in this region. We are basically the development company having separate division for training where we give training on real time projects which will give you the flavor of employment. High end meting out systems with internet way in makes the students to study, practice, and work professionally and to clear their fears immediately.

                                            Our C Training Chandigarh aims to teach beginners and employees.</p>
                                    </div>
                                    <div className="offset-top-30"><a href="http://www.piford.in"><img src="images/piford-images/banners/commonpic.png" width="770" height="480" alt="" className="img-responsive reveal-inline-block" /></a></div>
                                    <div className="offset-top-30">
                                        <h6 className="text-bold">Skills and Tools</h6>
                                        <div className="text-subline"></div>
                                        <div className="offset-top-20">
                                            <ul className="list list-unstyled list-marked">
                                                <h4 className="heading-color-all">What is C ?</h4>
                                                <li>Execution of C Program</li>
                                                <li>History</li>
                                                <li>Structure of C Program</li>
                                                <h4 className="heading-color-all">Variables and Keywords</h4>
                                                <li>Character Set</li>
                                                <li>Character Set</li>
                                                <li>Identifier</li>
                                                <li>Variable</li>
                                                <li>Keywords</li>
                                                <li>Escape Sequence Characters</li>
                                                <h4 className="heading-color-all">Constants</h4>
                                                <li>Real Constant</li>
                                                <li>Integer Constant</li>
                                                <li>Character Constant</li>
                                                <li>String Constant</li>
                                                <h4 className="heading-color-all">Data Types</h4>
                                                <li>Data Types</li>
                                                <li>Qualifier</li>
                                                <li>Enum</li>
                                                <li>Typedef</li>
                                                <h4 className="heading-color-all">Operators</h4>
                                                <li>Assignment Operator</li>
                                                <li>Arithmetic Operators</li>
                                                <li>Logical Operators</li>
                                                <li>Relational Operators</li>
                                                <li>Shorthand Operators</li>
                                                <li>Unary Operators</li>
                                                <li>Conditional / Ternary Operator</li>
                                                <li>Biwise Operators</li>
                                                <li>Operator Precedence and Associativity</li>
                                                <li>If Statement</li>
                                                <li>If-Else Statement</li>
                                                <li>Nested If-Else</li>
                                                <li>Switch Case</li>
                                                <h4 className="heading-color-all">Looping Statements</h4>
                                                <li>Looping / Iterative Statements</li>
                                                <li>While</li>
                                                <li>Do while</li>
                                                <li>For loop</li>
                                                <li>Break Statement</li>
                                                <li>Continue Statement</li>
                                                <li>Goto</li>
                                                <li>Function call by passing value</li>
                                                <li>Function call by returning value</li>
                                                <li>Function call by passing and returning value</li>
                                                <li>Recursion</li>
                                                <h4 className="heading-color-all">Storage Classes</h4>
                                                <li>Storage Classes</li>
                                                <li>Automatic Storage Class (auto)</li>
                                                <li>Register Storage Class (register)</li>
                                                <li>Static Storage Class (static)</li>
                                                <li>External Storage Class (extern)</li>
                                                <h4 className="heading-color-all">Array</h4>
                                                <li>Array</li>
                                                <li>Single / One Dimensional Array</li>
                                                <li>Two Dimensional Array</li>
                                                <h4 className="heading-color-all">Structure</h4>
                                                <li>Structure</li>
                                                <li>Array in Structures</li>
                                                <li>Structure with Array</li>
                                                <li>Difference between array and structure</li>
                                                <li>Pointer</li>
                                                <h4 className="heading-color-all">Union</h4>
                                                <li>Union</li>
                                                <li>Difference between structure and union</li>
                                                <li>Strings</li>
                                                <li>File Handling</li>
                                                <h4 className="heading-color-all">Header Files</h4>
                                                <li>Header File</li>
                                                <li>Assert.h</li>
                                                <li>Ctype.h</li>
                                                <li>Math.h</li>
                                                <li>Process.h</li>
                                                <li>String.h</li>
                                                <li>Time.h</li>
                                                <h4 className="heading-color-all">Programs Library</h4>
                                                <h4 className="heading-color-all">Projects Library</h4>

                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>
        </div >
    )
}

export default CoursesOffered;