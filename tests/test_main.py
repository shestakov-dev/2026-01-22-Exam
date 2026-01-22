from pytest import fixture
from fastapi.testclient import TestClient
from main import app


@fixture
def client():
    return TestClient(app)


def test_read_main(client):
    response = client.get("/")

    assert response.status_code == 200

    expected_response = {
        "message": "File Storage API",
        "endpoints": [
            "GET /files/{filename}",
            "POST /files",
            "GET /files",
            "GET /health",
            "GET /metrics",
        ],
    }

    assert response.json() == expected_response
