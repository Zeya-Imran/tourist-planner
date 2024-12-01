import React from "react";
const trendingActivities = [
  { id: 1, name: "Camping", icon: "🏕️" },
  { id: 2, name: "Trekking", icon: "🥾" },
];

const recentSearches = [
  { id: 1, name: "Delhi", icon: "📍" },
  { id: 2, name: "Heritage", icon: "🏛️" },
];

const suggestion = () => {
  return (
    <div className="absolute w-full bg-white shadow-md rounded-lg mt-10 z-10">
      {/* Use Current Location */}
      <div className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center">
        <span className="mr-2 text-blue-500">📍</span> Use Current Location
      </div>

      {/* Trending Activities */}
      <div className="px-4 pt-2 text-gray-500 text-sm">TRENDING ACTIVITIES</div>
      {trendingActivities.map((activity) => (
        <div
          key={activity.id}
          className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
          onClick={() => setQuery(activity.name)}
        >
          <span className="mr-2">{activity.icon}</span> {activity.name}
        </div>
      ))}

      {/* Recent Searches */}
      <div className="px-4 pt-2 text-gray-500 text-sm">RECENT SEARCHES</div>
      {recentSearches.map((search) => (
        <div
          key={search.id}
          className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
          onClick={() => setQuery(search.name)}
        >
          <span className="mr-2">{search.icon}</span> {search.name}
        </div>
      ))}
    </div>
  );
};
export default suggestion;
