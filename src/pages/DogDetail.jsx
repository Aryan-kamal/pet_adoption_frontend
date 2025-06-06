import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import "./PetDetail.css";
import {useNavigate} from "react-router-dom";
import {serverUrl} from "..";

function DogDetail() {
	const {id} = useParams();
	const [dog, setDog] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchDog = async () => {
			try {
				const res = await axios.get(`${serverUrl}/pets/${id}`);
				setDog(res.data);
			} catch (err) {
				console.error(err);
			}
		};

		fetchDog();
	}, [id]);

	const handleAdoptClick = () => {
		navigate(`/adopt`);
	};

	if (!dog) return <div>Loading...</div>;

	return (
		<div className="container m-5">
			<div className="text-center">
				<button
					className="btn btn-primary text-center"
					onClick={handleAdoptClick}
				>
					I am willing to adopt a pet
				</button>
			</div>
			<h2 className="mb-4">Dog Details</h2>
			<div className="card">
				<div className="center-image">
					<img
						src={`${dog.imageUrl}`}
						width={200}
						height={200}
						alt={dog.name}
					/>
				</div>

				<div className="card-body">
					<h5 className="card-title">{dog.name}</h5>
					<p className="card-text">Age: {dog.age} years</p>
					<p className="card-text">Description: {dog.description}</p>
					<p className="card-text">Category: {dog.category}</p>
					<p className="card-text">Subcategory: {dog.subcategory}</p>
				</div>
			</div>
		</div>
	);
}

export default DogDetail;
