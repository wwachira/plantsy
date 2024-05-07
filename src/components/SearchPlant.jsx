
export default function SearchPlant() {
  return (
    <div>
      <h4 className="font-bold text-xl">Search Plants:</h4>
      <input 
      type="text" 
      placeholder="Type a name to search" 
      className="border-b-3
      border-gray-600 outline-none
      focus:border-green-500 w-full" // becomes green when highlighted
      value={searchInput}
      />

    </div>
  )
}
