from flask import Flask, render_template, request, jsonify
from text_summary import text_summarizer  # Import your summarization function

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/summarize', methods=['POST'])
def summarize():
    try:
        data = request.get_json()
        original_text = data.get('text', '')
        summary, original_length, summary_length = text_summarizer(original_text)
        return jsonify({
            'summary': summary,
            'original_length': original_length,
            'summary_length': summary_length
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
