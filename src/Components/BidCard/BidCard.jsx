import Aos from "aos";
import 'aos/dist/aos.css'
import { format } from "date-fns";
import { useEffect } from "react";
import { CiMail, CiTimer } from "react-icons/ci";
import { TbCategoryPlus, TbCurrencyTaka } from "react-icons/tb";

const BidCard = ({ bid }) => {
    useEffect(() => {
        document.title = "JobSync | Applied Job"
        Aos.init()
    }, [])

    return (
        <div className="mx-auto">
            <div className="card h-[480px] bg-base-100 w-96 shadow-xl hover:scale-[.95] duration-200 transition-all ease-in">
                <figure>
                    <img
                        src={bid.PhotoURL}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{bid.title}</h2>
                    <p>{bid.comment}</p>
                    <div className="flex items-center justify-between mt-3 gap-3">
                        <div><CiTimer className="font-bold"></CiTimer></div>
                        <p>{format(bid.deadline, 'MMMM d, yyyy')}</p>
                    </div>
                    <div className="flex items-center justify-between mt-3  gap-3">
                        <CiMail className="font-bold"></CiMail>
                        <p>{bid.buyer_email}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-between mt-3 mb-4  gap-3">
                            <TbCategoryPlus className="font-bold"></TbCategoryPlus>
                            <p>{bid.category}</p>
                        </div>
                        <div className="flex items-center justify-between mt-3 mb-4">
                            <TbCurrencyTaka className="font-bold text-xl"></TbCurrencyTaka>
                            <p>{bid.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BidCard; 