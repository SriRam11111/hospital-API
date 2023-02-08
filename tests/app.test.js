
const request = require('supertest');
const app = require('../app');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

describe('Doctor-operations', () => {
  test('Get', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("welcome")
  })

  test('Get all doctors', async () => {
    const res = await request(app).get('/doctors');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    res.body.forEach(patient => {
        expect(patient).toHaveProperty('_id');
        expect(patient).toHaveProperty('name');
        expect(patient).toHaveProperty('specialty');
    });
  })

  test('Get a doctor by ID', async () => {
    const id= "63db9b837b0cb9e0096f82f7"
    const res = await request(app).get('/doctors/63db9b837b0cb9e0096f82f7');
    expect(res.statusCode).toEqual(200);
    expect(res.body._id).toEqual(id);
    
  });

  test('Create a new doctor', async () => {
    const doctor = { name: 'calorine', specialty: "brain-surgeon", patients: [ "63d37f6de1ee36df86aef575" ] };
    const res = await request(app).post('/doctors').send(doctor);
    //  console.log("this",res.body)
    expect(res.statusCode).toEqual(200);
    // expect(res.body.name).toEqual('vikki Doe');
  });

  it("should update a doctor record", async () => {
    const res = await request(app).put("/doctors/63db9def5cb084ea6843b034")
      .send({ name: 'vikki Doe', specialty: "brain-surgeon and heart-surgeon", patients: [ "63d37f6de1ee36df86aef575" ] });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("patients");
  });

   it("should delete a patient record", async () => {
    const res = await request(app).delete("/doctors/63da5a0e9fec7a1145561b94");
    expect(res.statusCode).toEqual(200);
  });
})


describe('Patient-operations', () => {
  test('Get', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("welcome")
  })

  test('Get all patients', async () => {
    const res = await request(app).get('/patients');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    res.body.forEach(patient => {
        expect(patient).toHaveProperty('_id');
        expect(patient).toHaveProperty('name');
        expect(patient).toHaveProperty('age');
        expect(patient).toHaveProperty('doctor');
    });
  })

  test('Get a patient by ID', async () => {
    const id= "63db9def5cb084ea6843b03a"
    const res = await request(app).get('/patients/63db9def5cb084ea6843b03a');
    expect(res.statusCode).toEqual(200);
    expect(res.body._id).toEqual(id);
    
  });

  test('Create a new patient', async () => {
    const patient = { "name": "mikaelson",
        "age": 49,
        "doctor": "63d389efc36e8df1a6033312" };
    const res = await request(app).post('/patients').send(patient);
    //  console.log("this",res.body)
    expect(res.statusCode).toEqual(200);
    // expect(res.body.name).toEqual('vikki Doe');
  });

  it("should update a patient record", async () => {
    const res = await request(app).put("/patients/63db9cc962a8db20b7e5edc5")
      .send({"name": "bruce wagon",
        "age": 30,
        "doctor": "63d3785a49566ce4ead814cb" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("doctor");
  });

   it("should delete a patient record", async () => {
    const res = await request(app).delete("/patients/63d38b32c36e8df1a6033318");
    expect(res.statusCode).toEqual(200);
  });
})