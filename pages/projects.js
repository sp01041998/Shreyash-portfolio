import { use, useState } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import { Skeleton } from "antd";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";
import { projects } from "../constants/constants";

const Portfolio = () => {

    const [isLoading , setIsLoading] = useState(false)

    return (
        <BannerLayout>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">

                {
                    isLoading ?
                        [1, 2, 3, 4].map((ele) => (
                            <div key ={ele}>
                                <ImageAndParagraphSkeleton className={"w-full object-cover"} />
                            </div>
                            
                        ))
                        :
                        projects?.map((data, key) => (
                            <PortfolioCard key={key} data={data} />
                        ))

                }


            </div >
            <Footer />
        </BannerLayout >
    );
};

export default Portfolio;
