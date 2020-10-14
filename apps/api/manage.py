import os
import sys

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "src.settings.dev")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
          "Couldn't import Django. Are you sure it's installed?"
        )
    execute_from_command_line(sys.argv)
