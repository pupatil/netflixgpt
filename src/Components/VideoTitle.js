
const VideoTitle = ({title , overview}) =>{

    return(
        <div className="w-screen aspect-video absolute  bg-gradient-to-r from-black text-white p-4" >
           <div className="text-3xl font-bold text-white px-10 pt-[20%]">
            {title}
            </div>
            <div className="w-4/12 text-lg font-white px-10 mt-4">
                {overview}
            </div>
            <div className="flex px-10 mt-4">
                <button className="border-gray-400 bg-white border- py-3 rounded-md text-black px-10 mr-10">▶️ Play</button>
                <button className="border-gray-400 bg-gray-500 border- py-3 rounded-md text-white px-10 mr-10">ℹ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;