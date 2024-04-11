import './Roadmap.css';

function Roadmap() {
  return (
    <section className="roadmap">
        <img src="assets/images/background/line.png" alt="" className="img-line"/>
        <div className="shape"></div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="block-text center">
                        <h6 className="sub-heading"><span>Road Map</span></h6>
                        <h3 className="heading wow words chars splitting animated" data-splitting="" ><span className="word" data-word="The" ><span className="char" data-char="T" >T</span><span className="char" data-char="h" >h</span><span className="char" data-char="e" >e</span></span><span className="whitespace"> </span><span className="word" data-word="Journey" ><span className="char" data-char="J" >J</span><span className="char" data-char="o" >o</span><span className="char" data-char="u" >u</span><span className="char" data-char="r" >r</span><span className="char" data-char="n" >n</span><span className="char" data-char="e">e</span><span className="char" data-char="y" >y</span></span><span className="whitespace"> </span><span className="word" data-word="of" ><span className="char" data-char="o" >o</span><span className="char" data-char="f" >f</span></span> <br/><span className="word" data-word="Unicorn" ><span className="char" data-char="U" >U</span><span className="char" data-char="n" >n</span><span className="char" data-char="i" >i</span><span className="char" data-char="c" >c</span><span className="char" data-char="o" >o</span><span className="char" data-char="r" >r</span><span className="char" data-char="n" >n</span></span><span className="whitespace"> </span><span className="word" data-word="Mart" ><span className="char" data-char="M" >M</span><span className="char" data-char="a" >a</span><span className="char" data-char="r" >r</span><span className="char" data-char="t" >t</span></span><span className="whitespace"> </span><span className="word" data-word="Inc." ><span className="char" data-char="I" >I</span><span className="char" data-char="n" >n</span><span className="char" data-char="c" >c</span><span className="char" data-char="." >.</span></span></h3>
                    </div>

                    <div className="roadmap__main aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000">
                        <div className="roadmap-box">
                            <div className="content">
                                <h5 className="title">Idea Generation</h5>
                                <p className="text">Creating creative concepts and breaking down conventional barriers, this process empowers individuals and teams to find innovative solutions and spark the next big breakthrough.</p>
                            </div>
                        </div>
                        <div className="roadmap-box right">
                            <div className="content">
                                <h5 className="title">Design &amp; Development</h5>
                                <p className="text">The process of designing and developing UMI Coin involves several key steps: Define Purpose and Use Case, Blockchain Selection, Smart Contract Development, Token Deployment, Web User Interface (UI) and User Experience (UX) Design, Integration, Launch and Distribution and Community Engagement.</p>
                            </div>
                        </div>
                        <div className="roadmap-box">
                            <div className="content">
                                <h5 className="title">Initial Release</h5>
                                <p className="text">The initial launch of UMI Coin involved a strategic and carefully planned process to ensure a successful launch. By using our team's strategies and steps, we are confident we can release the coin successfully, build a strong community, and lay the foundation for long-term growth and sustainability.</p>
                            </div>
                        </div>
                        <div className="roadmap-box right">
                            <div className="content">
                                <h5 className="title">Result &amp; Final Report</h5>
                                <p className="text">We will provide reports on sales results and final reports that are transparent, available to the public as well as to our sponsors and investors.</p>
                                <p className="text">Sales results and Final Reports, we will be transparent and provide them to the public, our investors, and sponsors.</p>
                            </div>
                        </div>


                    </div>
                    <div className="button mb-26">
                        {/* <a href="roadmap.html" className="action-btn"><span>View Full Road Map</span></a> */}
                    </div>

                </div>

            </div>
        </div>
    </section>
  );
}

export default Roadmap;
