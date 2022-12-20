import React from 'react'
import RecomendedCard from './Card/RecomendedCard';
import SuggestedCard from './SuggestedArticle/SuggestedCard';

const RecomendedTopic = () => {
  return (
    <>
        <section>
        <div class="privacy_padd">
            <div>
                <div class="d-flex justify-content-between align-items-center d-block">
                    <h2 class="heading2 mb-0">Recommended topics</h2>
                    <a href="#" class="mb-0 view_color">View all</a>
                </div>
                <div class="container mt-5">
                    <div class="row g-4">
                    
                            <RecomendedCard/>
                          <SuggestedCard />

                        </div>
                    </div>
                  
            </div>
            </div>
          </section>
    </>
  )
}

export default RecomendedTopic
