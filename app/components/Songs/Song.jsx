import PlayerButton from "../MusicPlayer/PlayerButtons";


export default function Song({artist, title, duration, onPlay }) {



    return (
        <div className="flex justify-between items-center bg-gray-700 text-white p-4 rounded-lg mb-2">
        
         {/* Song Title */}
         <div className="text-sm font-semibold">{artist}</div>

        {/* Song Title */}
        <div className="text-sm font-semibold">{title}</div>
  
        {/* Song Duration */}
        <div className="text-sm text-gray-400">{duration}</div>
  
        {/* Play Button */}
        <PlayerButton iconType="play" />
      </div>
    );
}