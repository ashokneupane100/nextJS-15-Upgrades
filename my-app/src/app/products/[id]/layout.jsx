function ProductLayout({ children }) {
    return (
        <div>
            <div>{children}</div>
            <div>
                <h1 className="bg-black text-white">
                    Featured Products Section for
                    right now:
                </h1>
            </div>
        </div>
    );
}

export default ProductLayout;