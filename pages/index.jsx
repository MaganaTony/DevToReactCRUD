import MainLayout from "@/layouts/mainLayout";

export default function Home() {
    return (
        <MainLayout>
            <div className="grid xl:col-start-2 md:grid-cols-[15rem_1fr] lg:grid-cols-[1fr_35rem_1fr] xl:grid-cols-[15rem_1fr_23rem] p-4">
                {/* <!--Columna 1--> */}
                <div className="hidden md:block">
                    <div>
                        <ul className="flex flex-col justify-end grow-1 gap-2">
                            <li className="nav-item"><a className="nav-link">🏠 &nbsp; Home</a></li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🗃️ &nbsp; Reading List</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">📃 &nbsp; Listings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🎙️ &nbsp; Podcasts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🎥 &nbsp; Videos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🏷️ &nbsp; Tags</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🛍️ &nbsp; Forem Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">❤️ &nbsp; Sponsors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🏳️‍🌈 &nbsp; About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">📯 &nbsp; Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">📖 &nbsp; Guides</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🤔 &nbsp; Software comparisons</a>
                            </li>
                        </ul>
                        <h5 className="my-3 font-bold">Other</h5>
                        <ul className="flex flex-col justify-end grow-1 gap-2">
                            <li className="nav-item">
                                <a className="nav-link" href="#">👍 &nbsp; Code of Conduct</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🤓 &nbsp; Privacy Policy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">👀 &nbsp; Terms of use</a>
                            </li>
                        </ul>
                        <div
                            className="flex justify-content-start mx-1 my-4 w-full top-[50px]"
                        >
                            <a href="#" className="mx-2"
                            ><img src="/svgexport-22.svg" alt="twitter"
                                /></a>
                            <a href="#" className="mx-2"
                            ><img src="/svgexport-23.svg" alt="facebook"
                                /></a>
                            <a href="#" className="mx-2"
                            ><img src="/svgexport-24.svg" alt="github"
                                /></a>
                            <a href="#" className="mx-2"
                            ><img src="/svgexport-25.svg" alt="instagram"
                                /></a>
                            <a href="#" className="mx-2"
                            ><img src="/svgexport-26.svg" alt="twitch"
                                /></a>
                            <a href="#" className="mx-2"
                            ><img src="/svgexport-27.svg" alt="fosstodon"
                                /></a>
                        </div>
                        {/* <!--Footer Left--> */}
                        <div className="w-full mt-6 text-sm text-wrap">
                            <p>
                                <a
                                    className="text-wrap"
                                    aria-label="DEV Community Home"
                                    href="/"
                                >DEV Community </a>
                                A constructive and inclusive social network for software
                                developers. With you every step of your journey.
                            </p>

                            <p className="mt-4">
                                Built on
                                <a
                                    className="text-wrap"
                                    href="#"
                                >Forem
                                </a>
                                — the
                                <a
                                    className="text-wrap"
                                    href="#"
                                >open source</a
                                >
                                software that powers
                                <a
                                    className="text-wrap"
                                    href="#"
                                >DEV </a>
                                and other inclusive communities.
                            </p>
                            <p className="mt-4">
                                Made with love and
                                <a
                                    className="c-link c-link--branded"
                                    href="#"
                                >Ruby on Rails</a>. DEV Community <span title="copyright">©</span> 2016 - 2024.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!--Columna 2--> */}
                <section>
                    <ul className="flex justify-start gap-2">
                        <li className="nav-item">
                            <a
                                className="font-bold"
                                aria-current="page"
                                href="#"
                            >Relevant</a
                            >
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-reset" href="./latest.html">Latest</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-reset" href="./top.html">Top</a>
                        </li>
                    </ul>

                    {/* <!--DEV CARD--> */}
                    <div className="card d-flex m-2">
                        <nav className="navbar bg-body-tertiary">
                            <div className="container-fluid d-flex align-items-center dropstart">
                                <span className="navbar-brand fs-6"> DEV Community </span>
                                <button
                                    className="navbar-toggler dropdown"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    {/* <img
                                        className="img-fluid d-block mx-auto"
                                        src="/svgexport-28.svg"
                                        alt=""
                                    />
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#"
                                            ><img
                                                    className="m-1"
                                                    src="/exclamation-circle.svg"
                                                    alt=""
                                                />What's a billboard?</a
                                            >
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#"
                                            ><img className="m-1" src="/nut.svg" alt="" />Manage
                                                preferences</a
                                            >
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#"
                                            ><img
                                                    className="m-1"
                                                    src="/flag.svg"
                                                    alt=""
                                                />Report Billboard</a
                                            >
                                        </li>
                                    </ul> */}

                                </button>
                            </div>
                        </nav>
                        <img
                            src="/dev_need_2_stay_up.png"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body figure-img img-fluid rounded">
                            <h5 className="card-title fw-bold">
                                Need to stay up-to-date with the most relevant trends in
                                software, such as generate AI, cloud computing, and all things
                                frontend?
                            </h5>
                            <br />
                            <p className="card-text">
                                DEV is free and it only takes one minute to create your account.
                            </p>
                        </div>
                        <div className="card-body-footer p-3">
                            <a href="/post.html" className="card-link fs-5 fw-bold">Join the community</a>
                            <div className="d-flex p-1">
                                <p className="">Happy coding</p>
                                <span>
                                    <img src="/svgexport-12.svg" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </section>

                {/* <!--Columna 3--> */}
                <div className="hidden lg:block">
                    <div className="d-flex flex-column">
                        {/* <!-- card active discussions (right)--> */}
                        <div
                            className="column__3--card card col-md-3 border-light-subtle bg-white shadow-sm mt-3 mx-3 py-3 pb-0"
                        >
                            <div className="tag-wrapper">
                                <div className="wrapper-body">
                                    <ul className="list-unstyled px-3">
                                        <li>
                                            <a href="#" className="text-decoration-none text-dark">
                                                <div className="border-bottom border-light-subtle">
                                                    <h5 className="fw-bold">Active discussions</h5>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="border-bottom border-light-subtle pt-3">
                                                <a href="#" className="text-decoration-none text-dark">
                                                    <div>Welcome thread</div>
                                                    <p className="text-secondary">2 comments</p>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="border-bottom border-light-subtle pt-3">
                                                <a href="#" className="text-decoration-none text-dark">
                                                    <div>
                                                        Built text summarization application to summarize a
                                                        web page with Angular
                                                    </div>
                                                    <p className="text-secondary">3 comments</p>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="border-bottom border-light-subtle pt-3">
                                                <a href="#" className="text-decoration-none text-dark">
                                                    <div>
                                                        Understanding JavaScript Debounce vs Throttle for
                                                        Better App Efficiency
                                                    </div>
                                                    <p className="text-secondary">9 comments</p>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="border-bottom border-light-subtle pt-3">
                                                <a href="#" className="text-decoration-none text-dark">
                                                    <div>Meme Monday</div>
                                                    <p className="text-secondary">44 comments</p>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="border-bottom border-light-subtle pt-3">
                                                <a href="#" className="text-decoration-none text-dark">
                                                    <div>My Newest Discovery: PlayFab</div>
                                                    <p className="text-secondary">1 comments</p>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <!-- card discuss (right)--> */}
                        <div
                            className="column__3--card card col-md-3 border-light-subtle bg-white shadow-sm mt-3 mx-3 py-3 pb-0"
                        >
                            <div className="tag-wrapper">
                                <div className="wrapper-body">
                                    <ul className="list-unstyled px-3">
                                        <li>
                                            <a href="#" className="text-decoration-none text-dark">
                                                <div className="border-bottom border-light-subtle">
                                                    <h5 className="fw-bold">#discuss</h5>
                                                    <p className="text-secondary">
                                                        Discussion threads targeting the whole community
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="border-bottom border-light-subtle py-3">
                                                <a href="#" className="text-decoration-none text-dark">
                                                    <div>Bootstrap</div>
                                                    <span className="badge rounded-pill text-bg-warning text"
                                                    >New</span
                                                    >
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="border-bottom border-light-subtle py-3">
                                                <a href="#" className="text-decoration-none text-dark">
                                                    <div>OMG my code is dirty? 🤔</div>
                                                    <span className="badge rounded-pill text-bg-warning"
                                                    >New</span
                                                    >
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="border-bottom border-light-subtle pt-3">
                                                <a href="#" className="text-decoration-none text-dark">
                                                    <div>
                                                        Web3 and the democratization of the Internet
                                                    </div>
                                                    <p className="text-secondary">49 comments</p>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="border-bottom border-light-subtle pt-3">
                                                <a href="#" className="text-decoration-none text-dark">
                                                    <div>What was your win this week?</div>
                                                    <p className="text-secondary">77 comments</p>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="border-bottom border-light-subtle pt-3">
                                                <a href="#" className="text-decoration-none text-dark">
                                                    <div>My first DEV community post</div>
                                                    <p className="text-secondary">10 comments</p>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="border-bottom border-light-subtle py-3 pt-3">
                                                <a href="#" className="text-decoration-none text-dark">
                                                    <div>
                                                        Getting started was difficult, but I keep pushing 🤓
                                                    </div>
                                                    <span className="badge rounded-pill text-bg-warning text"
                                                    >New</span
                                                    >
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- #Watercooler discuss (right) --> */}
                        <div
                            className="column__3--card card col-md-3 border-light-subtle bg-white shadow-sm mt-3 mx-3 py-3 pb-0"
                        >
                            <div className="tag-wrapper">
                                <div className="wrapper-body">
                                    <ul className="list-unstyled px-3">
                                        <li>
                                            <a href="#" className="text-decoration-none text-dark">
                                                <div className="border-bottom border-light-subtle">
                                                    <h5 className="fw-bold">#watercooler</h5>
                                                    <p className="text-secondary">
                                                        Light, and off-topic conversation.
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="border-bottom border-light-subtle pt-3">
                                                <a href="#" className="text-decoration-none text-dark">
                                                    <div>Meme Monday</div>
                                                    <p className="text-secondary">10 comments</p>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="border-bottom border-light-subtle py-3">
                                                <a href="#" className="text-decoration-none text-dark">
                                                    <div>
                                                        We need to slow down, Everything is going to fast
                                                    </div>
                                                    <span className="badge rounded-pill text-bg-warning"
                                                    >New</span
                                                    >
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}