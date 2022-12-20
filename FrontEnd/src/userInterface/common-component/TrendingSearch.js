import React from 'react'

export const TrendingSearch = () => {
  return (
    <>
        <div className="card mt-3 px-0">
                    <div className="card-body">
                      <h5 className="card-title mb-3">Trending searches</h5>
                      <hr />
                      {/* <!-- News item --> */}
                      <div className="mb-3">
                        <h6 className="mb-0">
                          <a href="blog-details.html">
                            Artificial intelligence{" "}
                          </a>
                        </h6>
                      </div>
                      {/* <!-- News item --> */}
                      <div className="mb-3">
                        <h6 className="mb-0">
                          <a href="blog-details.html">Blockchain</a>
                        </h6>
                      </div>
                      {/* <!-- News item --> */}
                      <div className="mb-3">
                        <h6 className="mb-0">
                          <a href="blog-details.html">
                            Learning Data Visualization
                          </a>
                        </h6>
                      </div>
                      {/* <!-- News item --> */}
                      <div className="mb-3">
                        <h6 className="mb-0">
                          <a href="blog-details.html">
                            Data Science and Analytics
                          </a>
                        </h6>
                      </div>
                      <div className="mb-3">
                        <h6 className="mb-0">
                          <a href="blog-details.html">Python</a>
                        </h6>
                      </div>
                    </div>
                  </div>
    </>
  )
}
