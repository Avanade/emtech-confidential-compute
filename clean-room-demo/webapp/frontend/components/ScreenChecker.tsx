const ScreenChecker = () => {
  return (<>
    <div className="fixed z-50 top-0 left-1/2 border border-black bg-orange-500 sm:bg-blue-500 md:bg-red-500 lg:bg-violet-500 xl:bg-yellow-500">
        <p className="sm:hidden">EXTRA SMALL</p>
        <p className="hidden sm:block md:hidden">SMALL</p>
        <p className="hidden md:block lg:hidden">MEDIUM</p>
        <p className="hidden lg:block xl:hidden">LARGE</p>
        <p className="hidden xl:block">EXTRA LARGE</p>
    </div>
  </>)
}

export default ScreenChecker