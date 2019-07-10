from rest_framework import serializers
from leads.models import Lead


# Load Serializers
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'
