const ShowItemModal = () => {
  return (
    <div className="modal fade" id="showItemModal">
        <div className="modal-dialog modal-dialong-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">
                        Show item
                    </h5>
                    <button type="button"
                    className="btn-close"
                    data-bs-dismiss="modal">
                    </button>
                </div>
                <div className="modar-body">
                    Select Item information
                </div>
                <div modal-footer>
                <button type="button"
                    className="btn-secondary"
                    data-bs-dismiss="modal"> Close
                    </button>
                </div>
            </div>
        </div>
        
    
    </div>
  )
}

export default ShowItemModal