import React,{useState} from 'react'
import { toast } from 'react-toastify';

const BMICalculator = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [gender, setGender] = useState("");
    const [bmi, setBmi] = useState("");
    const calculateBMI=(e)=>{
        e.preventDefault();
        if(!height||!weight||!gender){
            toast.error("Please enter valid height,weight,gender");
            return;
        }
        const heightInMeters=height/100;
        const bmiValue=(weight/(heightInMeters*heightInMeters)).toFixed(2);
        setBmi(bmiValue);
        if(bmiValue<18.5){
            toast.warning("You are underweight.Consider seeking advice from health expert");
        }
        else if(bmiValue>=18.5 && bmiValue<24.9){
            toast.success("You have normal weight.Keep maintaining a healthy lifeStyle")
        }
        else if(bmiValue>24.9){
            toast.warning("You are overweight.Consider seeking advice from health expert");
        }
        else{
            toast.error("You are obese.You should seek health advice");
        }
    }
  return (
    <section className='bmi'>
        <h1>BMI CALCULATOR</h1>
        <div className="container">
            <div className="wrapper">
                <form onSubmit={calculateBMI}>
                    <div>
                        <label>Height (cm)</label>
                        <input type='number' value={height} onChange={(e)=>setHeight(e.target.value)} />
                    </div>
                    <div>
                        <label>Weight (kg)</label>
                        <input type='number' value={weight} onChange={(e)=>setWeight(e.target.value)} />
                    </div>
                    <div>
                        <label>Gender</label>
                        <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                <button type='submit'>Calculate BMI</button>
            </form>
        </div>
        <div className="wrapper">
            <img src='/bmi.jpg' alt='bmiImage'></img>
        </div>
        </div>
    </section>
  )
}

export default BMICalculator