import React, {
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentPofile = () => {
	const { id } = useParams();

	const [student, setStudent] = useState({
		name: "",
		gender: "",
		email: "",
		department: "",
	});

	useEffect(() => {
		loadStudent();
	}, []);

	const loadStudent = async () => {
		const result = await axios.get(
			`http://localhost:8080/students/student/${id}`
		);
		setStudent(result.data);
	};

	return (
		<section
			className="shadow bg-dark"
			style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center bg-secondary text-white">
								<img
									src="https://wallpapers.com/images/high/smiley-default-pfp-0ujhadx5fhnhydlb.webp"
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">
									{`${student.name}`}
								</h5>
								{/* <h5 className="my-3">
									{`${student.gender}`}
								</h5> */}
								<div className="d-flex justify-content-center mb-2">
									<button
										type="button"
										className="btn btn-outline-primary text-white">
										Call
									</button>
									<button
										type="button"
										className="btn btn-outline-warning text-white ms-4">
										Message
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<div className="card mb-4 bg-secondary text-white">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="mb-0">
											{student.name}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Gender
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="mb-0">
											{student.gender}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Email
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="mb-0">
											{student.email}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Department
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="mb-0">
											{student.department}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StudentPofile;
