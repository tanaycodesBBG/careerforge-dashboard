function SkillsProgress() {
  const skills = [
    { name: "DSA", progress: 80 },
    { name: "React", progress: 70 },
    { name: "Node.js", progress: 50 },
    { name: "Machine Learning", progress: 40 },
  ];

  return (
    <section className="section">
      <h2>Skills Progress</h2>

      {skills.map((skill, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <p>{skill.name}</p>

          <div
            style={{
              background: "#334155",
              borderRadius: "10px",
              height: "12px",
            }}
          >
            <div
              style={{
                width: `${skill.progress}%`,
                background: "#38bdf8",
                height: "12px",
                borderRadius: "10px",
              }}
            />
          </div>

          <p>{skill.progress}%</p>
        </div>
      ))}
    </section>
  );
}

export default SkillsProgress;