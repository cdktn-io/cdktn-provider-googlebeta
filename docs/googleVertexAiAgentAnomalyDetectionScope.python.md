# `googleVertexAiAgentAnomalyDetectionScope` Submodule <a name="`googleVertexAiAgentAnomalyDetectionScope` Submodule" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiAgentAnomalyDetectionScope <a name="GoogleVertexAiAgentAnomalyDetectionScope" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope google_vertex_ai_agent_anomaly_detection_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_agent_anomaly_detection_scope

googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_anomaly_detection_scope_id: str,
  log_buckets: typing.List[str],
  observability_buckets: typing.List[str],
  region: str,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleVertexAiAgentAnomalyDetectionScopeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.agentAnomalyDetectionScopeId">agent_anomaly_detection_scope_id</a></code> | <code>str</code> | The ID to use for the AgentAnomalyDetectionScope, which will become the final component of the scope's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.logBuckets">log_buckets</a></code> | <code>typing.List[str]</code> | Customer owned Cloud Logging bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.observabilityBuckets">observability_buckets</a></code> | <code>typing.List[str]</code> | Customer owned Cloud Observability bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}/datasets/{{dataset}}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the AgentAnomalyDetectionScope, e.g. us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User provided display name of the AgentAnomalyDetectionScope. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#id GoogleVertexAiAgentAnomalyDetectionScope#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#project GoogleVertexAiAgentAnomalyDetectionScope#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_anomaly_detection_scope_id`<sup>Required</sup> <a name="agent_anomaly_detection_scope_id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.agentAnomalyDetectionScopeId"></a>

- *Type:* str

The ID to use for the AgentAnomalyDetectionScope, which will become the final component of the scope's resource name.

This value should be 1-63
characters and valid characters are /[a-z][0-9]-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#agent_anomaly_detection_scope_id GoogleVertexAiAgentAnomalyDetectionScope#agent_anomaly_detection_scope_id}

---

##### `log_buckets`<sup>Required</sup> <a name="log_buckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.logBuckets"></a>

- *Type:* typing.List[str]

Customer owned Cloud Logging bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#log_buckets GoogleVertexAiAgentAnomalyDetectionScope#log_buckets}

---

##### `observability_buckets`<sup>Required</sup> <a name="observability_buckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.observabilityBuckets"></a>

- *Type:* typing.List[str]

Customer owned Cloud Observability bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}/datasets/{{dataset}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#observability_buckets GoogleVertexAiAgentAnomalyDetectionScope#observability_buckets}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.region"></a>

- *Type:* str

The region of the AgentAnomalyDetectionScope, e.g. us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#region GoogleVertexAiAgentAnomalyDetectionScope#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#deletion_policy GoogleVertexAiAgentAnomalyDetectionScope#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.displayName"></a>

- *Type:* str

User provided display name of the AgentAnomalyDetectionScope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#display_name GoogleVertexAiAgentAnomalyDetectionScope#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#id GoogleVertexAiAgentAnomalyDetectionScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#project GoogleVertexAiAgentAnomalyDetectionScope#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#timeouts GoogleVertexAiAgentAnomalyDetectionScope#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#create GoogleVertexAiAgentAnomalyDetectionScope#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#delete GoogleVertexAiAgentAnomalyDetectionScope#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVertexAiAgentAnomalyDetectionScope resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_agent_anomaly_detection_scope

googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_agent_anomaly_detection_scope

googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_agent_anomaly_detection_scope

googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_agent_anomaly_detection_scope

googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVertexAiAgentAnomalyDetectionScope resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiAgentAnomalyDetectionScope to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiAgentAnomalyDetectionScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiAgentAnomalyDetectionScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference">GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.agentAnomalyDetectionScopeIdInput">agent_anomaly_detection_scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.logBucketsInput">log_buckets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.observabilityBucketsInput">observability_buckets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.agentAnomalyDetectionScopeId">agent_anomaly_detection_scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.logBuckets">log_buckets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.observabilityBuckets">observability_buckets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.timeouts"></a>

```python
timeouts: GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference">GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference</a>

---

##### `agent_anomaly_detection_scope_id_input`<sup>Optional</sup> <a name="agent_anomaly_detection_scope_id_input" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.agentAnomalyDetectionScopeIdInput"></a>

```python
agent_anomaly_detection_scope_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_buckets_input`<sup>Optional</sup> <a name="log_buckets_input" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.logBucketsInput"></a>

```python
log_buckets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `observability_buckets_input`<sup>Optional</sup> <a name="observability_buckets_input" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.observabilityBucketsInput"></a>

```python
observability_buckets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVertexAiAgentAnomalyDetectionScopeTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a>

---

##### `agent_anomaly_detection_scope_id`<sup>Required</sup> <a name="agent_anomaly_detection_scope_id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.agentAnomalyDetectionScopeId"></a>

```python
agent_anomaly_detection_scope_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_buckets`<sup>Required</sup> <a name="log_buckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.logBuckets"></a>

```python
log_buckets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `observability_buckets`<sup>Required</sup> <a name="observability_buckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.observabilityBuckets"></a>

```python
observability_buckets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiAgentAnomalyDetectionScopeConfig <a name="GoogleVertexAiAgentAnomalyDetectionScopeConfig" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_agent_anomaly_detection_scope

googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_anomaly_detection_scope_id: str,
  log_buckets: typing.List[str],
  observability_buckets: typing.List[str],
  region: str,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleVertexAiAgentAnomalyDetectionScopeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.agentAnomalyDetectionScopeId">agent_anomaly_detection_scope_id</a></code> | <code>str</code> | The ID to use for the AgentAnomalyDetectionScope, which will become the final component of the scope's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.logBuckets">log_buckets</a></code> | <code>typing.List[str]</code> | Customer owned Cloud Logging bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.observabilityBuckets">observability_buckets</a></code> | <code>typing.List[str]</code> | Customer owned Cloud Observability bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}/datasets/{{dataset}}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.region">region</a></code> | <code>str</code> | The region of the AgentAnomalyDetectionScope, e.g. us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.displayName">display_name</a></code> | <code>str</code> | User provided display name of the AgentAnomalyDetectionScope. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#id GoogleVertexAiAgentAnomalyDetectionScope#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#project GoogleVertexAiAgentAnomalyDetectionScope#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_anomaly_detection_scope_id`<sup>Required</sup> <a name="agent_anomaly_detection_scope_id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.agentAnomalyDetectionScopeId"></a>

```python
agent_anomaly_detection_scope_id: str
```

- *Type:* str

The ID to use for the AgentAnomalyDetectionScope, which will become the final component of the scope's resource name.

This value should be 1-63
characters and valid characters are /[a-z][0-9]-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#agent_anomaly_detection_scope_id GoogleVertexAiAgentAnomalyDetectionScope#agent_anomaly_detection_scope_id}

---

##### `log_buckets`<sup>Required</sup> <a name="log_buckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.logBuckets"></a>

```python
log_buckets: typing.List[str]
```

- *Type:* typing.List[str]

Customer owned Cloud Logging bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#log_buckets GoogleVertexAiAgentAnomalyDetectionScope#log_buckets}

---

##### `observability_buckets`<sup>Required</sup> <a name="observability_buckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.observabilityBuckets"></a>

```python
observability_buckets: typing.List[str]
```

- *Type:* typing.List[str]

Customer owned Cloud Observability bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}/datasets/{{dataset}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#observability_buckets GoogleVertexAiAgentAnomalyDetectionScope#observability_buckets}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the AgentAnomalyDetectionScope, e.g. us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#region GoogleVertexAiAgentAnomalyDetectionScope#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#deletion_policy GoogleVertexAiAgentAnomalyDetectionScope#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User provided display name of the AgentAnomalyDetectionScope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#display_name GoogleVertexAiAgentAnomalyDetectionScope#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#id GoogleVertexAiAgentAnomalyDetectionScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#project GoogleVertexAiAgentAnomalyDetectionScope#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiAgentAnomalyDetectionScopeTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#timeouts GoogleVertexAiAgentAnomalyDetectionScope#timeouts}

---

### GoogleVertexAiAgentAnomalyDetectionScopeTimeouts <a name="GoogleVertexAiAgentAnomalyDetectionScopeTimeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_agent_anomaly_detection_scope

googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#create GoogleVertexAiAgentAnomalyDetectionScope#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#delete GoogleVertexAiAgentAnomalyDetectionScope#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#create GoogleVertexAiAgentAnomalyDetectionScope#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#delete GoogleVertexAiAgentAnomalyDetectionScope#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference <a name="GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_agent_anomaly_detection_scope

googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiAgentAnomalyDetectionScopeTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a>

---



