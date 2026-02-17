// import React from 'react';
// import './Footer.css';

// function Footer() {
//   return (
//     <footer className="bg-dark text-light py-4">
//       <div className="container text-center">
//         <p className="mb-1">Founded by Aryan Kamal</p>
//         <p className="mb-1">RescueRover.org is proudly an </p>
//         <p className="mb-1">not for profit (NFP) Organization</p>
//         <p className="mb-1">Our contact number is 8004190139</p>
//         <p className="mb-0">Our email id: <a href="mailto:kamalaryan1234567@gmail.com@gmail.com" className="text-light">kamalaryan1234567@gmail.com</a></p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import {FaPhoneAlt, FaEnvelope, FaPaw} from "react-icons/fa";

const styles = {
	footer: {
		backgroundColor: "#222",
		color: "#fff",
		textAlign: "center",
		padding: "2rem 1rem",
		display: "flex",
		flexDirection: "column",
		gap: "1.5rem",
	},
	top: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "0.5rem",
	},
	logo: {
		fontSize: "2rem",
		animation: "pulse 2s infinite",
	},
	title: {
		fontSize: "1.5rem",
		margin: 0,
		color: "#ffffff",
		fontWeight: "bold",
		letterSpacing: "0.5px",
	},

	tagline: {
		fontStyle: "italic",
		opacity: 0.9,
		margin: 0,
	},
	info: {
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
		gap: "1.5rem",
	},
	item: {
		display: "flex",
		alignItems: "center",
		gap: "0.5rem",
	},
	icon: {
		fontSize: "1.1rem",
	},
	link: {
		color: "#fff",
		textDecoration: "none",
		fontWeight: 500,
		position: "relative",
		paddingBottom: "2px",
	},
	bottom: {
		fontSize: "0.9rem",
		opacity: 0.8,
	},
};

function Footer() {
	return (
		<>
			<style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }
        .footer-link:hover {
          color: #fdbb2d;
        }
        .footer-link:hover::after {
          width: 100%;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: #fdbb2d;
          transition: width 0.3s;
        }
        @media (max-width: 480px) {
          .footer-info {
            flex-direction: column !important;
            gap: 1rem !important;
          }
        }
      `}</style>

			<footer style={styles.footer}>
				<div style={styles.top}>
					<FaPaw style={styles.logo} />
					<h2 style={styles.title}>RescueRover.org</h2>
					<p style={styles.tagline}>Proudly a Not‑For‑Profit Organization</p>
				</div>

				<div className="footer-info" style={styles.info}>
					<div style={styles.item}>
						<FaPhoneAlt style={styles.icon} />
						<a
							href="tel:+18004190139"
							style={styles.link}
							className="footer-link"
						>
							800‑419‑0139
						</a>
					</div>
					<div style={styles.item}>
						<FaEnvelope style={styles.icon} />
						<a
							href="mailto:kamalaryan1234567@gmail.com"
							style={styles.link}
							className="footer-link"
						>
							kamalaryan1234567@gmail.com
						</a>
					</div>
				</div>

				<div style={styles.bottom}>
					<p>
						Founded by <strong>Aryan Kamal</strong>
					</p>
					<p>
						&copy; {new Date().getFullYear()} RescueRover.org. All rights
						reserved.
					</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
