import { ArrowRight } from 'lucide-react';

function About(){
    return(
        <div>
            <div className="font-bold justify-center items-center flex text-5xl gap-1 mt-2 pt-3">
                <p>We are more than <span className="text-transparent bg-clip-text 
                    bg-gradient-to-l from-yellow-300 to-orange-400">Digital mech Agency</span></p>
            </div>
            <div className="flex gap-20 justify-center items-center">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 py-3 mt-10">
                    <div className="col-span-2 bg-amber-200 px-50 py-30">1</div>
                    <div className="row-start-2 bg-amber-200 px-50 py-30">2</div>
                    <div className="row-start-2 bg-amber-200 px-50 py-30">3</div>
                </div>
                <div className="max-w-md mt-10">
                    <p className="text-3xl mb-3">who are we</p>
                    <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laudantium nam placeat corporis deserunt consequatur harum itaque magni dicta rem</p>
                    <a href="#" className="mb-20 text-orange-500 flex gap-1">Learn more
                        <ArrowRight />
                    </a>
                    <p className="text-3xl mb-3">what we do</p>
                    <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusamus quae quasi quod distinctio explicabo ut nam qui ad, </p>
                    <a href="#" className=" text-orange-500 flex gap-1">Learn more
                        <ArrowRight />
                    </a>
                    
                </div>
            </div>
        </div>
    )
}
export default About