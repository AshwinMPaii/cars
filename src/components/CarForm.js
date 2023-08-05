import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
    const dispatch = useDispatch();

    //USE SELECTORS
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        };
    })
    // const cost = useSelector((state) => {
    //     return state.form.cost;
    // })

    //EVENT HANDLERS
    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value))
    }
    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({ name, cost }))//gets its value from useSelectors

    }

    return (
        <div className='car-form panel'>
            <h4 className='subtitle is-3'>
                Add Car
            </h4>
            <form onSubmit={handleSubmit}>
                <div className='field-group'>
                    <div className='field'>
                        <label className='label'>Name</label>
                        <input
                            className='input is-expanded'
                            value={name}
                            onChange={handleNameChange}>
                        </input>
                    </div>
                    <div className='field'>
                        <label className='label'>Cost</label>
                        <input
                            className='input is-expanded'
                            value={cost || ''}
                            onChange={handleCostChange}
                            type='number'>
                        </input>
                    </div>
                    <div className="field">
                        <button className="button is-link">Submit</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default CarForm