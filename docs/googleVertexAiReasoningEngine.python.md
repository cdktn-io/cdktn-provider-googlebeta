# `googleVertexAiReasoningEngine` Submodule <a name="`googleVertexAiReasoningEngine` Submodule" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiReasoningEngine <a name="GoogleVertexAiReasoningEngine" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine google_vertex_ai_reasoning_engine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  context_spec: GoogleVertexAiReasoningEngineContextSpec = None,
  deletion_policy: str = None,
  description: str = None,
  encryption_spec: GoogleVertexAiReasoningEngineEncryptionSpec = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  region: str = None,
  spec: GoogleVertexAiReasoningEngineSpec = None,
  timeouts: GoogleVertexAiReasoningEngineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the ReasoningEngine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.contextSpec">context_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec">GoogleVertexAiReasoningEngineContextSpec</a></code> | context_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_reasoning_engine.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the ReasoningEngine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec">GoogleVertexAiReasoningEngineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#id GoogleVertexAiReasoningEngine#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this ReasoningEngine. You can use these to organize and group your ReasoningEngines. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#project GoogleVertexAiReasoningEngine#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the reasoning engine. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec">GoogleVertexAiReasoningEngineSpec</a></code> | spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts">GoogleVertexAiReasoningEngineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the ReasoningEngine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#display_name GoogleVertexAiReasoningEngine#display_name}

---

##### `context_spec`<sup>Optional</sup> <a name="context_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.contextSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec">GoogleVertexAiReasoningEngineContextSpec</a>

context_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#context_spec GoogleVertexAiReasoningEngine#context_spec}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_reasoning_engine.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#deletion_policy GoogleVertexAiReasoningEngine#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.description"></a>

- *Type:* str

The description of the ReasoningEngine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#description GoogleVertexAiReasoningEngine#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec">GoogleVertexAiReasoningEngineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#encryption_spec GoogleVertexAiReasoningEngine#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#id GoogleVertexAiReasoningEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels associated with this ReasoningEngine. You can use these to organize and group your ReasoningEngines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#labels GoogleVertexAiReasoningEngine#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#project GoogleVertexAiReasoningEngine#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.region"></a>

- *Type:* str

The region of the reasoning engine. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#region GoogleVertexAiReasoningEngine#region}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec">GoogleVertexAiReasoningEngineSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#spec GoogleVertexAiReasoningEngine#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts">GoogleVertexAiReasoningEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#timeouts GoogleVertexAiReasoningEngine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putContextSpec">put_context_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetContextSpec">reset_context_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetSpec">reset_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_context_spec` <a name="put_context_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putContextSpec"></a>

```python
def put_context_spec(
  memory_bank_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig = None
) -> None
```

###### `memory_bank_config`<sup>Optional</sup> <a name="memory_bank_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putContextSpec.parameter.memoryBankConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig</a>

memory_bank_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#memory_bank_config GoogleVertexAiReasoningEngine#memory_bank_config}

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putEncryptionSpec.parameter.kmsKeyName"></a>

- *Type:* str

Required.

The Cloud KMS resource identifier of the customer managed
encryption key used to protect a resource. Has the form:
projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
The key needs to be in the same region as where the compute resource
is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#kms_key_name GoogleVertexAiReasoningEngine#kms_key_name}

---

##### `put_spec` <a name="put_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putSpec"></a>

```python
def put_spec(
  agent_framework: str = None,
  class_methods: str = None,
  container_spec: GoogleVertexAiReasoningEngineSpecContainerSpec = None,
  deployment_spec: GoogleVertexAiReasoningEngineSpecDeploymentSpec = None,
  identity_type: str = None,
  package_spec: GoogleVertexAiReasoningEngineSpecPackageSpec = None,
  service_account: str = None,
  source_code_spec: GoogleVertexAiReasoningEngineSpecSourceCodeSpec = None
) -> None
```

###### `agent_framework`<sup>Optional</sup> <a name="agent_framework" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putSpec.parameter.agentFramework"></a>

- *Type:* str

Optional. The OSS agent framework used to develop the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#agent_framework GoogleVertexAiReasoningEngine#agent_framework}

---

###### `class_methods`<sup>Optional</sup> <a name="class_methods" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putSpec.parameter.classMethods"></a>

- *Type:* str

Optional. Declarations for object class methods in OpenAPI specification format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#class_methods GoogleVertexAiReasoningEngine#class_methods}

---

###### `container_spec`<sup>Optional</sup> <a name="container_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putSpec.parameter.containerSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec">GoogleVertexAiReasoningEngineSpecContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#container_spec GoogleVertexAiReasoningEngine#container_spec}

---

###### `deployment_spec`<sup>Optional</sup> <a name="deployment_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putSpec.parameter.deploymentSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec">GoogleVertexAiReasoningEngineSpecDeploymentSpec</a>

deployment_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#deployment_spec GoogleVertexAiReasoningEngine#deployment_spec}

---

###### `identity_type`<sup>Optional</sup> <a name="identity_type" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putSpec.parameter.identityType"></a>

- *Type:* str

Optional.

The identity type to use for the Reasoning Engine.
If not specified, the 'service_account' field will be used if set,
otherwise the default Vertex AI Reasoning Engine Service Agent in the project will be used.
Possible values:

* 'SERVICE_ACCOUNT': Use a custom service account if the 'service_account' field is set, otherwise use the default Vertex AI Reasoning Engine Service Agent in the project.
* 'AGENT_IDENTITY': Use Agent Identity. The 'service_account' field must not be set. Possible values: ["SERVICE_ACCOUNT", "AGENT_IDENTITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#identity_type GoogleVertexAiReasoningEngine#identity_type}

---

###### `package_spec`<sup>Optional</sup> <a name="package_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putSpec.parameter.packageSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec">GoogleVertexAiReasoningEngineSpecPackageSpec</a>

package_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#package_spec GoogleVertexAiReasoningEngine#package_spec}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putSpec.parameter.serviceAccount"></a>

- *Type:* str

Optional.

The service account that the Reasoning Engine artifact runs
as. It should have "roles/storage.objectViewer" for reading the user
project's Cloud Storage and "roles/aiplatform.user" for using Vertex
extensions. If not specified, the Vertex AI Reasoning Engine service
Agent in the project will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#service_account GoogleVertexAiReasoningEngine#service_account}

---

###### `source_code_spec`<sup>Optional</sup> <a name="source_code_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putSpec.parameter.sourceCodeSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpec</a>

source_code_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#source_code_spec GoogleVertexAiReasoningEngine#source_code_spec}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#create GoogleVertexAiReasoningEngine#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#delete GoogleVertexAiReasoningEngine#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#update GoogleVertexAiReasoningEngine#update}.

---

##### `reset_context_spec` <a name="reset_context_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetContextSpec"></a>

```python
def reset_context_spec() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetSpec"></a>

```python
def reset_spec() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVertexAiReasoningEngine resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVertexAiReasoningEngine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiReasoningEngine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiReasoningEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiReasoningEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.contextSpec">context_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference">GoogleVertexAiReasoningEngineContextSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference">GoogleVertexAiReasoningEngineEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference">GoogleVertexAiReasoningEngineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference">GoogleVertexAiReasoningEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.contextSpecInput">context_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec">GoogleVertexAiReasoningEngineContextSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec">GoogleVertexAiReasoningEngineEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.specInput">spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec">GoogleVertexAiReasoningEngineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts">GoogleVertexAiReasoningEngineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `context_spec`<sup>Required</sup> <a name="context_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.contextSpec"></a>

```python
context_spec: GoogleVertexAiReasoningEngineContextSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference">GoogleVertexAiReasoningEngineContextSpecOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiReasoningEngineEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference">GoogleVertexAiReasoningEngineEncryptionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.spec"></a>

```python
spec: GoogleVertexAiReasoningEngineSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference">GoogleVertexAiReasoningEngineSpecOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.timeouts"></a>

```python
timeouts: GoogleVertexAiReasoningEngineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference">GoogleVertexAiReasoningEngineTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `context_spec_input`<sup>Optional</sup> <a name="context_spec_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.contextSpecInput"></a>

```python
context_spec_input: GoogleVertexAiReasoningEngineContextSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec">GoogleVertexAiReasoningEngineContextSpec</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.encryptionSpecInput"></a>

```python
encryption_spec_input: GoogleVertexAiReasoningEngineEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec">GoogleVertexAiReasoningEngineEncryptionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.specInput"></a>

```python
spec_input: GoogleVertexAiReasoningEngineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec">GoogleVertexAiReasoningEngineSpec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVertexAiReasoningEngineTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts">GoogleVertexAiReasoningEngineTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiReasoningEngineConfig <a name="GoogleVertexAiReasoningEngineConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  context_spec: GoogleVertexAiReasoningEngineContextSpec = None,
  deletion_policy: str = None,
  description: str = None,
  encryption_spec: GoogleVertexAiReasoningEngineEncryptionSpec = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  region: str = None,
  spec: GoogleVertexAiReasoningEngineSpec = None,
  timeouts: GoogleVertexAiReasoningEngineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the ReasoningEngine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.contextSpec">context_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec">GoogleVertexAiReasoningEngineContextSpec</a></code> | context_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_reasoning_engine.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.description">description</a></code> | <code>str</code> | The description of the ReasoningEngine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec">GoogleVertexAiReasoningEngineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#id GoogleVertexAiReasoningEngine#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this ReasoningEngine. You can use these to organize and group your ReasoningEngines. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#project GoogleVertexAiReasoningEngine#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.region">region</a></code> | <code>str</code> | The region of the reasoning engine. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec">GoogleVertexAiReasoningEngineSpec</a></code> | spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts">GoogleVertexAiReasoningEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the ReasoningEngine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#display_name GoogleVertexAiReasoningEngine#display_name}

---

##### `context_spec`<sup>Optional</sup> <a name="context_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.contextSpec"></a>

```python
context_spec: GoogleVertexAiReasoningEngineContextSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec">GoogleVertexAiReasoningEngineContextSpec</a>

context_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#context_spec GoogleVertexAiReasoningEngine#context_spec}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_reasoning_engine.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#deletion_policy GoogleVertexAiReasoningEngine#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the ReasoningEngine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#description GoogleVertexAiReasoningEngine#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiReasoningEngineEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec">GoogleVertexAiReasoningEngineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#encryption_spec GoogleVertexAiReasoningEngine#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#id GoogleVertexAiReasoningEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels associated with this ReasoningEngine. You can use these to organize and group your ReasoningEngines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#labels GoogleVertexAiReasoningEngine#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#project GoogleVertexAiReasoningEngine#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the reasoning engine. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#region GoogleVertexAiReasoningEngine#region}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.spec"></a>

```python
spec: GoogleVertexAiReasoningEngineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec">GoogleVertexAiReasoningEngineSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#spec GoogleVertexAiReasoningEngine#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiReasoningEngineTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts">GoogleVertexAiReasoningEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#timeouts GoogleVertexAiReasoningEngine#timeouts}

---

### GoogleVertexAiReasoningEngineContextSpec <a name="GoogleVertexAiReasoningEngineContextSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec(
  memory_bank_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec.property.memoryBankConfig">memory_bank_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig</a></code> | memory_bank_config block. |

---

##### `memory_bank_config`<sup>Optional</sup> <a name="memory_bank_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec.property.memoryBankConfig"></a>

```python
memory_bank_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig</a>

memory_bank_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#memory_bank_config GoogleVertexAiReasoningEngine#memory_bank_config}

---

### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig(
  disable_memory_revisions: bool | IResolvable = None,
  generation_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig = None,
  similarity_search_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig = None,
  ttl_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.property.disableMemoryRevisions">disable_memory_revisions</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, no memory revisions will be created for any requests to the Memory Bank. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.property.generationConfig">generation_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig</a></code> | generation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.property.similaritySearchConfig">similarity_search_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig</a></code> | similarity_search_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.property.ttlConfig">ttl_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig</a></code> | ttl_config block. |

---

##### `disable_memory_revisions`<sup>Optional</sup> <a name="disable_memory_revisions" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.property.disableMemoryRevisions"></a>

```python
disable_memory_revisions: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, no memory revisions will be created for any requests to the Memory Bank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#disable_memory_revisions GoogleVertexAiReasoningEngine#disable_memory_revisions}

---

##### `generation_config`<sup>Optional</sup> <a name="generation_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.property.generationConfig"></a>

```python
generation_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig</a>

generation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#generation_config GoogleVertexAiReasoningEngine#generation_config}

---

##### `similarity_search_config`<sup>Optional</sup> <a name="similarity_search_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.property.similaritySearchConfig"></a>

```python
similarity_search_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig</a>

similarity_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#similarity_search_config GoogleVertexAiReasoningEngine#similarity_search_config}

---

##### `ttl_config`<sup>Optional</sup> <a name="ttl_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.property.ttlConfig"></a>

```python
ttl_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig</a>

ttl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#ttl_config GoogleVertexAiReasoningEngine#ttl_config}

---

### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig(
  model: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig.property.model">model</a></code> | <code>str</code> | The model used to generate memories. Format: projects/{project}/locations/{location}/publishers/google/models/{model}. |

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig.property.model"></a>

```python
model: str
```

- *Type:* str

The model used to generate memories. Format: projects/{project}/locations/{location}/publishers/google/models/{model}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#model GoogleVertexAiReasoningEngine#model}

---

### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig(
  embedding_model: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig.property.embeddingModel">embedding_model</a></code> | <code>str</code> | The model used to generate embeddings to lookup similar memories. Format: projects/{project}/locations/{location}/publishers/google/models/{model}. |

---

##### `embedding_model`<sup>Required</sup> <a name="embedding_model" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig.property.embeddingModel"></a>

```python
embedding_model: str
```

- *Type:* str

The model used to generate embeddings to lookup similar memories. Format: projects/{project}/locations/{location}/publishers/google/models/{model}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#embedding_model GoogleVertexAiReasoningEngine#embedding_model}

---

### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig(
  default_ttl: str = None,
  granular_ttl_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig = None,
  memory_revision_default_ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig.property.defaultTtl">default_ttl</a></code> | <code>str</code> | The default TTL duration of the memories in the Memory Bank. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig.property.granularTtlConfig">granular_ttl_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig</a></code> | granular_ttl_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig.property.memoryRevisionDefaultTtl">memory_revision_default_ttl</a></code> | <code>str</code> | The default TTL duration of the memory revisions in the Memory Bank. |

---

##### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig.property.defaultTtl"></a>

```python
default_ttl: str
```

- *Type:* str

The default TTL duration of the memories in the Memory Bank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#default_ttl GoogleVertexAiReasoningEngine#default_ttl}

---

##### `granular_ttl_config`<sup>Optional</sup> <a name="granular_ttl_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig.property.granularTtlConfig"></a>

```python
granular_ttl_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig</a>

granular_ttl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#granular_ttl_config GoogleVertexAiReasoningEngine#granular_ttl_config}

---

##### `memory_revision_default_ttl`<sup>Optional</sup> <a name="memory_revision_default_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig.property.memoryRevisionDefaultTtl"></a>

```python
memory_revision_default_ttl: str
```

- *Type:* str

The default TTL duration of the memory revisions in the Memory Bank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#memory_revision_default_ttl GoogleVertexAiReasoningEngine#memory_revision_default_ttl}

---

### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig(
  create_ttl: str = None,
  generate_created_ttl: str = None,
  generate_updated_ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig.property.createTtl">create_ttl</a></code> | <code>str</code> | The TTL duration for memories uploaded via CreateMemory. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig.property.generateCreatedTtl">generate_created_ttl</a></code> | <code>str</code> | The TTL duration for memories newly generated via GenerateMemories. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig.property.generateUpdatedTtl">generate_updated_ttl</a></code> | <code>str</code> | The TTL duration for memories updated via GenerateMemories. |

---

##### `create_ttl`<sup>Optional</sup> <a name="create_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig.property.createTtl"></a>

```python
create_ttl: str
```

- *Type:* str

The TTL duration for memories uploaded via CreateMemory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#create_ttl GoogleVertexAiReasoningEngine#create_ttl}

---

##### `generate_created_ttl`<sup>Optional</sup> <a name="generate_created_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig.property.generateCreatedTtl"></a>

```python
generate_created_ttl: str
```

- *Type:* str

The TTL duration for memories newly generated via GenerateMemories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#generate_created_ttl GoogleVertexAiReasoningEngine#generate_created_ttl}

---

##### `generate_updated_ttl`<sup>Optional</sup> <a name="generate_updated_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig.property.generateUpdatedTtl"></a>

```python
generate_updated_ttl: str
```

- *Type:* str

The TTL duration for memories updated via GenerateMemories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#generate_updated_ttl GoogleVertexAiReasoningEngine#generate_updated_ttl}

---

### GoogleVertexAiReasoningEngineEncryptionSpec <a name="GoogleVertexAiReasoningEngineEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Required. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Required.

The Cloud KMS resource identifier of the customer managed
encryption key used to protect a resource. Has the form:
projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
The key needs to be in the same region as where the compute resource
is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#kms_key_name GoogleVertexAiReasoningEngine#kms_key_name}

---

### GoogleVertexAiReasoningEngineSpec <a name="GoogleVertexAiReasoningEngineSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec(
  agent_framework: str = None,
  class_methods: str = None,
  container_spec: GoogleVertexAiReasoningEngineSpecContainerSpec = None,
  deployment_spec: GoogleVertexAiReasoningEngineSpecDeploymentSpec = None,
  identity_type: str = None,
  package_spec: GoogleVertexAiReasoningEngineSpecPackageSpec = None,
  service_account: str = None,
  source_code_spec: GoogleVertexAiReasoningEngineSpecSourceCodeSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.agentFramework">agent_framework</a></code> | <code>str</code> | Optional. The OSS agent framework used to develop the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.classMethods">class_methods</a></code> | <code>str</code> | Optional. Declarations for object class methods in OpenAPI specification format. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.containerSpec">container_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec">GoogleVertexAiReasoningEngineSpecContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.deploymentSpec">deployment_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec">GoogleVertexAiReasoningEngineSpecDeploymentSpec</a></code> | deployment_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.identityType">identity_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.packageSpec">package_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec">GoogleVertexAiReasoningEngineSpecPackageSpec</a></code> | package_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.serviceAccount">service_account</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.sourceCodeSpec">source_code_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpec</a></code> | source_code_spec block. |

---

##### `agent_framework`<sup>Optional</sup> <a name="agent_framework" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.agentFramework"></a>

```python
agent_framework: str
```

- *Type:* str

Optional. The OSS agent framework used to develop the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#agent_framework GoogleVertexAiReasoningEngine#agent_framework}

---

##### `class_methods`<sup>Optional</sup> <a name="class_methods" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.classMethods"></a>

```python
class_methods: str
```

- *Type:* str

Optional. Declarations for object class methods in OpenAPI specification format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#class_methods GoogleVertexAiReasoningEngine#class_methods}

---

##### `container_spec`<sup>Optional</sup> <a name="container_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.containerSpec"></a>

```python
container_spec: GoogleVertexAiReasoningEngineSpecContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec">GoogleVertexAiReasoningEngineSpecContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#container_spec GoogleVertexAiReasoningEngine#container_spec}

---

##### `deployment_spec`<sup>Optional</sup> <a name="deployment_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.deploymentSpec"></a>

```python
deployment_spec: GoogleVertexAiReasoningEngineSpecDeploymentSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec">GoogleVertexAiReasoningEngineSpecDeploymentSpec</a>

deployment_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#deployment_spec GoogleVertexAiReasoningEngine#deployment_spec}

---

##### `identity_type`<sup>Optional</sup> <a name="identity_type" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

Optional.

The identity type to use for the Reasoning Engine.
If not specified, the 'service_account' field will be used if set,
otherwise the default Vertex AI Reasoning Engine Service Agent in the project will be used.
Possible values:

* 'SERVICE_ACCOUNT': Use a custom service account if the 'service_account' field is set, otherwise use the default Vertex AI Reasoning Engine Service Agent in the project.
* 'AGENT_IDENTITY': Use Agent Identity. The 'service_account' field must not be set. Possible values: ["SERVICE_ACCOUNT", "AGENT_IDENTITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#identity_type GoogleVertexAiReasoningEngine#identity_type}

---

##### `package_spec`<sup>Optional</sup> <a name="package_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.packageSpec"></a>

```python
package_spec: GoogleVertexAiReasoningEngineSpecPackageSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec">GoogleVertexAiReasoningEngineSpecPackageSpec</a>

package_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#package_spec GoogleVertexAiReasoningEngine#package_spec}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Optional.

The service account that the Reasoning Engine artifact runs
as. It should have "roles/storage.objectViewer" for reading the user
project's Cloud Storage and "roles/aiplatform.user" for using Vertex
extensions. If not specified, the Vertex AI Reasoning Engine service
Agent in the project will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#service_account GoogleVertexAiReasoningEngine#service_account}

---

##### `source_code_spec`<sup>Optional</sup> <a name="source_code_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.sourceCodeSpec"></a>

```python
source_code_spec: GoogleVertexAiReasoningEngineSpecSourceCodeSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpec</a>

source_code_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#source_code_spec GoogleVertexAiReasoningEngine#source_code_spec}

---

### GoogleVertexAiReasoningEngineSpecContainerSpec <a name="GoogleVertexAiReasoningEngineSpecContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec(
  image_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec.property.imageUri">image_uri</a></code> | <code>str</code> | The Artifact Registry Docker image URI (e.g., 'us-central1-docker.pkg.dev/my-project/my-repo/my-image:tag') of the container image that is to be run on each worker replica. |

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

The Artifact Registry Docker image URI (e.g., 'us-central1-docker.pkg.dev/my-project/my-repo/my-image:tag') of the container image that is to be run on each worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#image_uri GoogleVertexAiReasoningEngine#image_uri}

---

### GoogleVertexAiReasoningEngineSpecDeploymentSpec <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec(
  container_concurrency: typing.Union[int, float] = None,
  env: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv] = None,
  max_instances: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  psc_interface_config: GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig = None,
  resource_limits: typing.Mapping[str] = None,
  secret_env: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.containerConcurrency">container_concurrency</a></code> | <code>typing.Union[int, float]</code> | Optional. Concurrency for each container and agent server. Recommended value: 2 * cpu + 1. Defaults to 9. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.env">env</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a>]</code> | env block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.pscInterfaceConfig">psc_interface_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.resourceLimits">resource_limits</a></code> | <code>typing.Mapping[str]</code> | Optional. Resource limits for each container. Only 'cpu' and 'memory' keys are supported. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.secretEnv">secret_env</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>]</code> | secret_env block. |

---

##### `container_concurrency`<sup>Optional</sup> <a name="container_concurrency" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.containerConcurrency"></a>

```python
container_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. Concurrency for each container and agent server. Recommended value: 2 * cpu + 1. Defaults to 9.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#container_concurrency GoogleVertexAiReasoningEngine#container_concurrency}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.env"></a>

```python
env: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a>]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#env GoogleVertexAiReasoningEngine#env}

---

##### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

The maximum number of application instances that can be
launched to handle increased traffic. Defaults to 100.
Range: [1, 1000]. If VPC-SC or PSC-I is enabled, the acceptable
range is [1, 100].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#max_instances GoogleVertexAiReasoningEngine#max_instances}

---

##### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

The minimum number of application instances that will be
kept running at all times. Defaults to 1. Range: [0, 10].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#min_instances GoogleVertexAiReasoningEngine#min_instances}

---

##### `psc_interface_config`<sup>Optional</sup> <a name="psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.pscInterfaceConfig"></a>

```python
psc_interface_config: GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#psc_interface_config GoogleVertexAiReasoningEngine#psc_interface_config}

---

##### `resource_limits`<sup>Optional</sup> <a name="resource_limits" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.resourceLimits"></a>

```python
resource_limits: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Resource limits for each container. Only 'cpu' and 'memory' keys are supported.

Defaults to {"cpu": "4", "memory": "4Gi"}.

The only supported values for CPU are '1', '2', '4', '6' and '8'.
For more information, go to
https://cloud.google.com/run/docs/configuring/cpu.

The only supported values for memory are '1Gi', '2Gi', ... '32 Gi'.
For more information, go to
https://cloud.google.com/run/docs/configuring/memory-limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#resource_limits GoogleVertexAiReasoningEngine#resource_limits}

---

##### `secret_env`<sup>Optional</sup> <a name="secret_env" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.secretEnv"></a>

```python
secret_env: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>]

secret_env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#secret_env GoogleVertexAiReasoningEngine#secret_env}

---

### GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv.property.name">name</a></code> | <code>str</code> | The name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv.property.value">value</a></code> | <code>str</code> | Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#name GoogleVertexAiReasoningEngine#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv.property.value"></a>

```python
value: str
```

- *Type:* str

Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables.

If a variable cannot
be resolved, the reference in the input string will be
unchanged. The $(VAR_NAME) syntax can be escaped with a
double $$, ie: $$(VAR_NAME). Escaped references will never
be expanded, regardless of whether the variable exists
or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#value GoogleVertexAiReasoningEngine#value}

---

### GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig(
  dns_peering_configs: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs] = None,
  network_attachment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.property.dnsPeeringConfigs">dns_peering_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>]</code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.property.networkAttachment">network_attachment</a></code> | <code>str</code> | Optional. |

---

##### `dns_peering_configs`<sup>Optional</sup> <a name="dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.property.dnsPeeringConfigs"></a>

```python
dns_peering_configs: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>]

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#dns_peering_configs GoogleVertexAiReasoningEngine#dns_peering_configs}

---

##### `network_attachment`<sup>Optional</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

Optional.

The name of the Compute Engine network attachment
to attach to the resource within the region and user project.
To specify this field, you must have already created a network attachment.
This field is only used for resources using PSC-Interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#network_attachment GoogleVertexAiReasoningEngine#network_attachment}

---

### GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs(
  domain: str,
  target_network: str,
  target_project: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.domain">domain</a></code> | <code>str</code> | Required. The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">target_network</a></code> | <code>str</code> | Required. The VPC network name in the targetProject where the DNS zone specified by 'domain' is visible. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject">target_project</a></code> | <code>str</code> | Required. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```python
domain: str
```

- *Type:* str

Required. The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#domain GoogleVertexAiReasoningEngine#domain}

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```python
target_network: str
```

- *Type:* str

Required. The VPC network name in the targetProject where the DNS zone specified by 'domain' is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#target_network GoogleVertexAiReasoningEngine#target_network}

---

##### `target_project`<sup>Required</sup> <a name="target_project" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```python
target_project: str
```

- *Type:* str

Required.

The project id hosting the Cloud DNS managed
zone that contains the 'domain'.
The Vertex AI service Agent requires the dns.peer role
on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#target_project GoogleVertexAiReasoningEngine#target_project}

---

### GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv(
  name: str,
  secret_ref: GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv.property.name">name</a></code> | <code>str</code> | The name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv.property.secretRef">secret_ref</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a></code> | secret_ref block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#name GoogleVertexAiReasoningEngine#name}

---

##### `secret_ref`<sup>Required</sup> <a name="secret_ref" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv.property.secretRef"></a>

```python
secret_ref: GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#secret_ref GoogleVertexAiReasoningEngine#secret_ref}

---

### GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef(
  secret: str,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.property.secret">secret</a></code> | <code>str</code> | The name of the secret in Cloud Secret Manager. Format: {secret_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.property.version">version</a></code> | <code>str</code> | The Cloud Secret Manager secret version. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.property.secret"></a>

```python
secret: str
```

- *Type:* str

The name of the secret in Cloud Secret Manager. Format: {secret_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#secret GoogleVertexAiReasoningEngine#secret}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.property.version"></a>

```python
version: str
```

- *Type:* str

The Cloud Secret Manager secret version.

Can be 'latest'
for the latest version, an integer for a specific
version, or a version alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#version GoogleVertexAiReasoningEngine#version}

---

### GoogleVertexAiReasoningEngineSpecPackageSpec <a name="GoogleVertexAiReasoningEngineSpecPackageSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec(
  dependency_files_gcs_uri: str = None,
  pickle_object_gcs_uri: str = None,
  python_version: str = None,
  requirements_gcs_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.property.dependencyFilesGcsUri">dependency_files_gcs_uri</a></code> | <code>str</code> | Optional. The Cloud Storage URI of the dependency files in tar.gz format. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.property.pickleObjectGcsUri">pickle_object_gcs_uri</a></code> | <code>str</code> | Optional. The Cloud Storage URI of the pickled python object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.property.pythonVersion">python_version</a></code> | <code>str</code> | Optional. The Python version. Currently support 3.8, 3.9, 3.10, 3.11, 3.12, 3.13. If not specified, default value is 3.10. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.property.requirementsGcsUri">requirements_gcs_uri</a></code> | <code>str</code> | Optional. The Cloud Storage URI of the requirements.txtfile. |

---

##### `dependency_files_gcs_uri`<sup>Optional</sup> <a name="dependency_files_gcs_uri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.property.dependencyFilesGcsUri"></a>

```python
dependency_files_gcs_uri: str
```

- *Type:* str

Optional. The Cloud Storage URI of the dependency files in tar.gz format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#dependency_files_gcs_uri GoogleVertexAiReasoningEngine#dependency_files_gcs_uri}

---

##### `pickle_object_gcs_uri`<sup>Optional</sup> <a name="pickle_object_gcs_uri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.property.pickleObjectGcsUri"></a>

```python
pickle_object_gcs_uri: str
```

- *Type:* str

Optional. The Cloud Storage URI of the pickled python object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#pickle_object_gcs_uri GoogleVertexAiReasoningEngine#pickle_object_gcs_uri}

---

##### `python_version`<sup>Optional</sup> <a name="python_version" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.property.pythonVersion"></a>

```python
python_version: str
```

- *Type:* str

Optional. The Python version. Currently support 3.8, 3.9, 3.10, 3.11, 3.12, 3.13. If not specified, default value is 3.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#python_version GoogleVertexAiReasoningEngine#python_version}

---

##### `requirements_gcs_uri`<sup>Optional</sup> <a name="requirements_gcs_uri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.property.requirementsGcsUri"></a>

```python
requirements_gcs_uri: str
```

- *Type:* str

Optional. The Cloud Storage URI of the requirements.txtfile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#requirements_gcs_uri GoogleVertexAiReasoningEngine#requirements_gcs_uri}

---

### GoogleVertexAiReasoningEngineSpecSourceCodeSpec <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec(
  developer_connect_source: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource = None,
  image_spec: GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec = None,
  inline_source: GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource = None,
  python_spec: GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.property.developerConnectSource">developer_connect_source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a></code> | developer_connect_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.property.imageSpec">image_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a></code> | image_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.property.inlineSource">inline_source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a></code> | inline_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.property.pythonSpec">python_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a></code> | python_spec block. |

---

##### `developer_connect_source`<sup>Optional</sup> <a name="developer_connect_source" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.property.developerConnectSource"></a>

```python
developer_connect_source: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a>

developer_connect_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#developer_connect_source GoogleVertexAiReasoningEngine#developer_connect_source}

---

##### `image_spec`<sup>Optional</sup> <a name="image_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.property.imageSpec"></a>

```python
image_spec: GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a>

image_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#image_spec GoogleVertexAiReasoningEngine#image_spec}

---

##### `inline_source`<sup>Optional</sup> <a name="inline_source" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.property.inlineSource"></a>

```python
inline_source: GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a>

inline_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#inline_source GoogleVertexAiReasoningEngine#inline_source}

---

##### `python_spec`<sup>Optional</sup> <a name="python_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.property.pythonSpec"></a>

```python
python_spec: GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a>

python_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#python_spec GoogleVertexAiReasoningEngine#python_spec}

---

### GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource(
  config: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource.property.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a></code> | config block. |

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource.property.config"></a>

```python
config: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#config GoogleVertexAiReasoningEngine#config}

---

### GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig(
  dir: str,
  git_repository_link: str,
  revision: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.dir">dir</a></code> | <code>str</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.gitRepositoryLink">git_repository_link</a></code> | <code>str</code> | The Developer Connect Git repository link, formatted as projects/* /locations/* /connections/* /gitRepositoryLink/*. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.revision">revision</a></code> | <code>str</code> | The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. |

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.dir"></a>

```python
dir: str
```

- *Type:* str

Directory, relative to the source root, in which to run the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#dir GoogleVertexAiReasoningEngine#dir}

---

##### `git_repository_link`<sup>Required</sup> <a name="git_repository_link" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.gitRepositoryLink"></a>

```python
git_repository_link: str
```

- *Type:* str

The Developer Connect Git repository link, formatted as projects/* /locations/* /connections/* /gitRepositoryLink/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#git_repository_link GoogleVertexAiReasoningEngine#git_repository_link}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.revision"></a>

```python
revision: str
```

- *Type:* str

The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#revision GoogleVertexAiReasoningEngine#revision}

---

### GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec(
  build_args: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec.property.buildArgs">build_args</a></code> | <code>typing.Mapping[str]</code> | Build arguments to be used. They will be passed through --build-arg flags. |

---

##### `build_args`<sup>Optional</sup> <a name="build_args" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec.property.buildArgs"></a>

```python
build_args: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Build arguments to be used. They will be passed through --build-arg flags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#build_args GoogleVertexAiReasoningEngine#build_args}

---

### GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource(
  source_archive: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource.property.sourceArchive">source_archive</a></code> | <code>str</code> | Required. Input only. The application source code archive, provided as a compressed tarball (.tar.gz) file. A base64-encoded string. |

---

##### `source_archive`<sup>Optional</sup> <a name="source_archive" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource.property.sourceArchive"></a>

```python
source_archive: str
```

- *Type:* str

Required. Input only. The application source code archive, provided as a compressed tarball (.tar.gz) file. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#source_archive GoogleVertexAiReasoningEngine#source_archive}

---

### GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec(
  entrypoint_module: str = None,
  entrypoint_object: str = None,
  requirements_file: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.entrypointModule">entrypoint_module</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.entrypointObject">entrypoint_object</a></code> | <code>str</code> | Optional. The name of the callable object within the entrypointModule to use as the application If not specified, defaults to "root_agent". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.requirementsFile">requirements_file</a></code> | <code>str</code> | Optional. The path to the requirements file, relative to the source root. If not specified, defaults to "requirements.txt". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.version">version</a></code> | <code>str</code> | Optional. |

---

##### `entrypoint_module`<sup>Optional</sup> <a name="entrypoint_module" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.entrypointModule"></a>

```python
entrypoint_module: str
```

- *Type:* str

Optional.

The Python module to load as the entrypoint,
specified as a fully qualified module name. For example:
path.to.agent. If not specified, defaults to "agent".
The project root will be added to Python sys.path, allowing
imports to be specified relative to the root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#entrypoint_module GoogleVertexAiReasoningEngine#entrypoint_module}

---

##### `entrypoint_object`<sup>Optional</sup> <a name="entrypoint_object" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.entrypointObject"></a>

```python
entrypoint_object: str
```

- *Type:* str

Optional. The name of the callable object within the entrypointModule to use as the application If not specified, defaults to "root_agent".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#entrypoint_object GoogleVertexAiReasoningEngine#entrypoint_object}

---

##### `requirements_file`<sup>Optional</sup> <a name="requirements_file" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.requirementsFile"></a>

```python
requirements_file: str
```

- *Type:* str

Optional. The path to the requirements file, relative to the source root. If not specified, defaults to "requirements.txt".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#requirements_file GoogleVertexAiReasoningEngine#requirements_file}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.version"></a>

```python
version: str
```

- *Type:* str

Optional.

The version of Python to use. Support version
includes 3.9, 3.10, 3.11, 3.12, 3.13. If not specified,
default value is 3.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#version GoogleVertexAiReasoningEngine#version}

---

### GoogleVertexAiReasoningEngineTimeouts <a name="GoogleVertexAiReasoningEngineTimeouts" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#create GoogleVertexAiReasoningEngine#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#delete GoogleVertexAiReasoningEngine#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#update GoogleVertexAiReasoningEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#create GoogleVertexAiReasoningEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#delete GoogleVertexAiReasoningEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#update GoogleVertexAiReasoningEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig</a>

---


### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putGenerationConfig">put_generation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putSimilaritySearchConfig">put_similarity_search_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putTtlConfig">put_ttl_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resetDisableMemoryRevisions">reset_disable_memory_revisions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resetGenerationConfig">reset_generation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resetSimilaritySearchConfig">reset_similarity_search_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resetTtlConfig">reset_ttl_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_generation_config` <a name="put_generation_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putGenerationConfig"></a>

```python
def put_generation_config(
  model: str
) -> None
```

###### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putGenerationConfig.parameter.model"></a>

- *Type:* str

The model used to generate memories. Format: projects/{project}/locations/{location}/publishers/google/models/{model}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#model GoogleVertexAiReasoningEngine#model}

---

##### `put_similarity_search_config` <a name="put_similarity_search_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putSimilaritySearchConfig"></a>

```python
def put_similarity_search_config(
  embedding_model: str
) -> None
```

###### `embedding_model`<sup>Required</sup> <a name="embedding_model" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putSimilaritySearchConfig.parameter.embeddingModel"></a>

- *Type:* str

The model used to generate embeddings to lookup similar memories. Format: projects/{project}/locations/{location}/publishers/google/models/{model}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#embedding_model GoogleVertexAiReasoningEngine#embedding_model}

---

##### `put_ttl_config` <a name="put_ttl_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putTtlConfig"></a>

```python
def put_ttl_config(
  default_ttl: str = None,
  granular_ttl_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig = None,
  memory_revision_default_ttl: str = None
) -> None
```

###### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putTtlConfig.parameter.defaultTtl"></a>

- *Type:* str

The default TTL duration of the memories in the Memory Bank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#default_ttl GoogleVertexAiReasoningEngine#default_ttl}

---

###### `granular_ttl_config`<sup>Optional</sup> <a name="granular_ttl_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putTtlConfig.parameter.granularTtlConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig</a>

granular_ttl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#granular_ttl_config GoogleVertexAiReasoningEngine#granular_ttl_config}

---

###### `memory_revision_default_ttl`<sup>Optional</sup> <a name="memory_revision_default_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putTtlConfig.parameter.memoryRevisionDefaultTtl"></a>

- *Type:* str

The default TTL duration of the memory revisions in the Memory Bank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#memory_revision_default_ttl GoogleVertexAiReasoningEngine#memory_revision_default_ttl}

---

##### `reset_disable_memory_revisions` <a name="reset_disable_memory_revisions" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resetDisableMemoryRevisions"></a>

```python
def reset_disable_memory_revisions() -> None
```

##### `reset_generation_config` <a name="reset_generation_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resetGenerationConfig"></a>

```python
def reset_generation_config() -> None
```

##### `reset_similarity_search_config` <a name="reset_similarity_search_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resetSimilaritySearchConfig"></a>

```python
def reset_similarity_search_config() -> None
```

##### `reset_ttl_config` <a name="reset_ttl_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resetTtlConfig"></a>

```python
def reset_ttl_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.generationConfig">generation_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.similaritySearchConfig">similarity_search_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.ttlConfig">ttl_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.disableMemoryRevisionsInput">disable_memory_revisions_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.generationConfigInput">generation_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.similaritySearchConfigInput">similarity_search_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.ttlConfigInput">ttl_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.disableMemoryRevisions">disable_memory_revisions</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation_config`<sup>Required</sup> <a name="generation_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.generationConfig"></a>

```python
generation_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference</a>

---

##### `similarity_search_config`<sup>Required</sup> <a name="similarity_search_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.similaritySearchConfig"></a>

```python
similarity_search_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference</a>

---

##### `ttl_config`<sup>Required</sup> <a name="ttl_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.ttlConfig"></a>

```python
ttl_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference</a>

---

##### `disable_memory_revisions_input`<sup>Optional</sup> <a name="disable_memory_revisions_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.disableMemoryRevisionsInput"></a>

```python
disable_memory_revisions_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `generation_config_input`<sup>Optional</sup> <a name="generation_config_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.generationConfigInput"></a>

```python
generation_config_input: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig</a>

---

##### `similarity_search_config_input`<sup>Optional</sup> <a name="similarity_search_config_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.similaritySearchConfigInput"></a>

```python
similarity_search_config_input: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig</a>

---

##### `ttl_config_input`<sup>Optional</sup> <a name="ttl_config_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.ttlConfigInput"></a>

```python
ttl_config_input: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig</a>

---

##### `disable_memory_revisions`<sup>Required</sup> <a name="disable_memory_revisions" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.disableMemoryRevisions"></a>

```python
disable_memory_revisions: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig</a>

---


### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.embeddingModelInput">embedding_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.embeddingModel">embedding_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `embedding_model_input`<sup>Optional</sup> <a name="embedding_model_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.embeddingModelInput"></a>

```python
embedding_model_input: str
```

- *Type:* str

---

##### `embedding_model`<sup>Required</sup> <a name="embedding_model" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.embeddingModel"></a>

```python
embedding_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig</a>

---


### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resetCreateTtl">reset_create_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resetGenerateCreatedTtl">reset_generate_created_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resetGenerateUpdatedTtl">reset_generate_updated_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create_ttl` <a name="reset_create_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resetCreateTtl"></a>

```python
def reset_create_ttl() -> None
```

##### `reset_generate_created_ttl` <a name="reset_generate_created_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resetGenerateCreatedTtl"></a>

```python
def reset_generate_created_ttl() -> None
```

##### `reset_generate_updated_ttl` <a name="reset_generate_updated_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resetGenerateUpdatedTtl"></a>

```python
def reset_generate_updated_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.createTtlInput">create_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.generateCreatedTtlInput">generate_created_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.generateUpdatedTtlInput">generate_updated_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.createTtl">create_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.generateCreatedTtl">generate_created_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.generateUpdatedTtl">generate_updated_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_ttl_input`<sup>Optional</sup> <a name="create_ttl_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.createTtlInput"></a>

```python
create_ttl_input: str
```

- *Type:* str

---

##### `generate_created_ttl_input`<sup>Optional</sup> <a name="generate_created_ttl_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.generateCreatedTtlInput"></a>

```python
generate_created_ttl_input: str
```

- *Type:* str

---

##### `generate_updated_ttl_input`<sup>Optional</sup> <a name="generate_updated_ttl_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.generateUpdatedTtlInput"></a>

```python
generate_updated_ttl_input: str
```

- *Type:* str

---

##### `create_ttl`<sup>Required</sup> <a name="create_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.createTtl"></a>

```python
create_ttl: str
```

- *Type:* str

---

##### `generate_created_ttl`<sup>Required</sup> <a name="generate_created_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.generateCreatedTtl"></a>

```python
generate_created_ttl: str
```

- *Type:* str

---

##### `generate_updated_ttl`<sup>Required</sup> <a name="generate_updated_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.generateUpdatedTtl"></a>

```python
generate_updated_ttl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig</a>

---


### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.putGranularTtlConfig">put_granular_ttl_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resetDefaultTtl">reset_default_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resetGranularTtlConfig">reset_granular_ttl_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resetMemoryRevisionDefaultTtl">reset_memory_revision_default_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_granular_ttl_config` <a name="put_granular_ttl_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.putGranularTtlConfig"></a>

```python
def put_granular_ttl_config(
  create_ttl: str = None,
  generate_created_ttl: str = None,
  generate_updated_ttl: str = None
) -> None
```

###### `create_ttl`<sup>Optional</sup> <a name="create_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.putGranularTtlConfig.parameter.createTtl"></a>

- *Type:* str

The TTL duration for memories uploaded via CreateMemory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#create_ttl GoogleVertexAiReasoningEngine#create_ttl}

---

###### `generate_created_ttl`<sup>Optional</sup> <a name="generate_created_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.putGranularTtlConfig.parameter.generateCreatedTtl"></a>

- *Type:* str

The TTL duration for memories newly generated via GenerateMemories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#generate_created_ttl GoogleVertexAiReasoningEngine#generate_created_ttl}

---

###### `generate_updated_ttl`<sup>Optional</sup> <a name="generate_updated_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.putGranularTtlConfig.parameter.generateUpdatedTtl"></a>

- *Type:* str

The TTL duration for memories updated via GenerateMemories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#generate_updated_ttl GoogleVertexAiReasoningEngine#generate_updated_ttl}

---

##### `reset_default_ttl` <a name="reset_default_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resetDefaultTtl"></a>

```python
def reset_default_ttl() -> None
```

##### `reset_granular_ttl_config` <a name="reset_granular_ttl_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resetGranularTtlConfig"></a>

```python
def reset_granular_ttl_config() -> None
```

##### `reset_memory_revision_default_ttl` <a name="reset_memory_revision_default_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resetMemoryRevisionDefaultTtl"></a>

```python
def reset_memory_revision_default_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.granularTtlConfig">granular_ttl_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.defaultTtlInput">default_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.granularTtlConfigInput">granular_ttl_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.memoryRevisionDefaultTtlInput">memory_revision_default_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.defaultTtl">default_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.memoryRevisionDefaultTtl">memory_revision_default_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `granular_ttl_config`<sup>Required</sup> <a name="granular_ttl_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.granularTtlConfig"></a>

```python
granular_ttl_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference</a>

---

##### `default_ttl_input`<sup>Optional</sup> <a name="default_ttl_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.defaultTtlInput"></a>

```python
default_ttl_input: str
```

- *Type:* str

---

##### `granular_ttl_config_input`<sup>Optional</sup> <a name="granular_ttl_config_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.granularTtlConfigInput"></a>

```python
granular_ttl_config_input: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig</a>

---

##### `memory_revision_default_ttl_input`<sup>Optional</sup> <a name="memory_revision_default_ttl_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.memoryRevisionDefaultTtlInput"></a>

```python
memory_revision_default_ttl_input: str
```

- *Type:* str

---

##### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.defaultTtl"></a>

```python
default_ttl: str
```

- *Type:* str

---

##### `memory_revision_default_ttl`<sup>Required</sup> <a name="memory_revision_default_ttl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.memoryRevisionDefaultTtl"></a>

```python
memory_revision_default_ttl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig</a>

---


### GoogleVertexAiReasoningEngineContextSpecOutputReference <a name="GoogleVertexAiReasoningEngineContextSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.putMemoryBankConfig">put_memory_bank_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.resetMemoryBankConfig">reset_memory_bank_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_memory_bank_config` <a name="put_memory_bank_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.putMemoryBankConfig"></a>

```python
def put_memory_bank_config(
  disable_memory_revisions: bool | IResolvable = None,
  generation_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig = None,
  similarity_search_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig = None,
  ttl_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig = None
) -> None
```

###### `disable_memory_revisions`<sup>Optional</sup> <a name="disable_memory_revisions" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.putMemoryBankConfig.parameter.disableMemoryRevisions"></a>

- *Type:* bool | cdktn.IResolvable

If true, no memory revisions will be created for any requests to the Memory Bank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#disable_memory_revisions GoogleVertexAiReasoningEngine#disable_memory_revisions}

---

###### `generation_config`<sup>Optional</sup> <a name="generation_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.putMemoryBankConfig.parameter.generationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig</a>

generation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#generation_config GoogleVertexAiReasoningEngine#generation_config}

---

###### `similarity_search_config`<sup>Optional</sup> <a name="similarity_search_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.putMemoryBankConfig.parameter.similaritySearchConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig</a>

similarity_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#similarity_search_config GoogleVertexAiReasoningEngine#similarity_search_config}

---

###### `ttl_config`<sup>Optional</sup> <a name="ttl_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.putMemoryBankConfig.parameter.ttlConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig</a>

ttl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#ttl_config GoogleVertexAiReasoningEngine#ttl_config}

---

##### `reset_memory_bank_config` <a name="reset_memory_bank_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.resetMemoryBankConfig"></a>

```python
def reset_memory_bank_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.memoryBankConfig">memory_bank_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.memoryBankConfigInput">memory_bank_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec">GoogleVertexAiReasoningEngineContextSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_bank_config`<sup>Required</sup> <a name="memory_bank_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.memoryBankConfig"></a>

```python
memory_bank_config: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference</a>

---

##### `memory_bank_config_input`<sup>Optional</sup> <a name="memory_bank_config_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.memoryBankConfigInput"></a>

```python
memory_bank_config_input: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineContextSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec">GoogleVertexAiReasoningEngineContextSpec</a>

---


### GoogleVertexAiReasoningEngineEncryptionSpecOutputReference <a name="GoogleVertexAiReasoningEngineEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec">GoogleVertexAiReasoningEngineEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec">GoogleVertexAiReasoningEngineEncryptionSpec</a>

---


### GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference <a name="GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec">GoogleVertexAiReasoningEngineSpecContainerSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineSpecContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec">GoogleVertexAiReasoningEngineSpecContainerSpec</a>

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a>]

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a>

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putEnv">put_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putPscInterfaceConfig">put_psc_interface_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putSecretEnv">put_secret_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetContainerConcurrency">reset_container_concurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetMaxInstances">reset_max_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetMinInstances">reset_min_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetPscInterfaceConfig">reset_psc_interface_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetResourceLimits">reset_resource_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetSecretEnv">reset_secret_env</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_env` <a name="put_env" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putEnv"></a>

```python
def put_env(
  value: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a>]

---

##### `put_psc_interface_config` <a name="put_psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putPscInterfaceConfig"></a>

```python
def put_psc_interface_config(
  dns_peering_configs: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs] = None,
  network_attachment: str = None
) -> None
```

###### `dns_peering_configs`<sup>Optional</sup> <a name="dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putPscInterfaceConfig.parameter.dnsPeeringConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>]

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#dns_peering_configs GoogleVertexAiReasoningEngine#dns_peering_configs}

---

###### `network_attachment`<sup>Optional</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putPscInterfaceConfig.parameter.networkAttachment"></a>

- *Type:* str

Optional.

The name of the Compute Engine network attachment
to attach to the resource within the region and user project.
To specify this field, you must have already created a network attachment.
This field is only used for resources using PSC-Interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#network_attachment GoogleVertexAiReasoningEngine#network_attachment}

---

##### `put_secret_env` <a name="put_secret_env" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putSecretEnv"></a>

```python
def put_secret_env(
  value: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putSecretEnv.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>]

---

##### `reset_container_concurrency` <a name="reset_container_concurrency" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetContainerConcurrency"></a>

```python
def reset_container_concurrency() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_max_instances` <a name="reset_max_instances" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetMaxInstances"></a>

```python
def reset_max_instances() -> None
```

##### `reset_min_instances` <a name="reset_min_instances" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetMinInstances"></a>

```python
def reset_min_instances() -> None
```

##### `reset_psc_interface_config` <a name="reset_psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetPscInterfaceConfig"></a>

```python
def reset_psc_interface_config() -> None
```

##### `reset_resource_limits` <a name="reset_resource_limits" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetResourceLimits"></a>

```python
def reset_resource_limits() -> None
```

##### `reset_secret_env` <a name="reset_secret_env" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetSecretEnv"></a>

```python
def reset_secret_env() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.pscInterfaceConfig">psc_interface_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.secretEnv">secret_env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.containerConcurrencyInput">container_concurrency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.envInput">env_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.maxInstancesInput">max_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.minInstancesInput">min_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.pscInterfaceConfigInput">psc_interface_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.resourceLimitsInput">resource_limits_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.secretEnvInput">secret_env_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.containerConcurrency">container_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.resourceLimits">resource_limits</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec">GoogleVertexAiReasoningEngineSpecDeploymentSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.env"></a>

```python
env: GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList</a>

---

##### `psc_interface_config`<sup>Required</sup> <a name="psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.pscInterfaceConfig"></a>

```python
psc_interface_config: GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference</a>

---

##### `secret_env`<sup>Required</sup> <a name="secret_env" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.secretEnv"></a>

```python
secret_env: GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList</a>

---

##### `container_concurrency_input`<sup>Optional</sup> <a name="container_concurrency_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.containerConcurrencyInput"></a>

```python
container_concurrency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.envInput"></a>

```python
env_input: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a>]

---

##### `max_instances_input`<sup>Optional</sup> <a name="max_instances_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.maxInstancesInput"></a>

```python
max_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances_input`<sup>Optional</sup> <a name="min_instances_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.minInstancesInput"></a>

```python
min_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `psc_interface_config_input`<sup>Optional</sup> <a name="psc_interface_config_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.pscInterfaceConfigInput"></a>

```python
psc_interface_config_input: GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a>

---

##### `resource_limits_input`<sup>Optional</sup> <a name="resource_limits_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.resourceLimitsInput"></a>

```python
resource_limits_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secret_env_input`<sup>Optional</sup> <a name="secret_env_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.secretEnvInput"></a>

```python
secret_env_input: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>]

---

##### `container_concurrency`<sup>Required</sup> <a name="container_concurrency" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.containerConcurrency"></a>

```python
container_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_limits`<sup>Required</sup> <a name="resource_limits" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.resourceLimits"></a>

```python
resource_limits: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineSpecDeploymentSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec">GoogleVertexAiReasoningEngineSpecDeploymentSpec</a>

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>]

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">target_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">target_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">target_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">target_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `target_network_input`<sup>Optional</sup> <a name="target_network_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```python
target_network_input: str
```

- *Type:* str

---

##### `target_project_input`<sup>Optional</sup> <a name="target_project_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```python
target_project_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```python
target_network: str
```

- *Type:* str

---

##### `target_project`<sup>Required</sup> <a name="target_project" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```python
target_project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs">put_dns_peering_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs">reset_dns_peering_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resetNetworkAttachment">reset_network_attachment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns_peering_configs` <a name="put_dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```python
def put_dns_peering_configs(
  value: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>]

---

##### `reset_dns_peering_configs` <a name="reset_dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```python
def reset_dns_peering_configs() -> None
```

##### `reset_network_attachment` <a name="reset_network_attachment" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```python
def reset_network_attachment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs">dns_peering_configs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">dns_peering_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput">network_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_peering_configs`<sup>Required</sup> <a name="dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```python
dns_peering_configs: GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `dns_peering_configs_input`<sup>Optional</sup> <a name="dns_peering_configs_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```python
dns_peering_configs_input: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>]

---

##### `network_attachment_input`<sup>Optional</sup> <a name="network_attachment_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```python
network_attachment_input: str
```

- *Type:* str

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a>

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>]

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.putSecretRef">put_secret_ref</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secret_ref` <a name="put_secret_ref" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.putSecretRef"></a>

```python
def put_secret_ref(
  secret: str,
  version: str = None
) -> None
```

###### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.putSecretRef.parameter.secret"></a>

- *Type:* str

The name of the secret in Cloud Secret Manager. Format: {secret_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#secret GoogleVertexAiReasoningEngine#secret}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.putSecretRef.parameter.version"></a>

- *Type:* str

The Cloud Secret Manager secret version.

Can be 'latest'
for the latest version, an integer for a specific
version, or a version alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#version GoogleVertexAiReasoningEngine#version}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.secretRef">secret_ref</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.secretRefInput">secret_ref_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_ref`<sup>Required</sup> <a name="secret_ref" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.secretRef"></a>

```python
secret_ref: GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secret_ref_input`<sup>Optional</sup> <a name="secret_ref_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.secretRefInput"></a>

```python
secret_ref_input: GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_version` <a name="reset_version" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a>

---


### GoogleVertexAiReasoningEngineSpecOutputReference <a name="GoogleVertexAiReasoningEngineSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putContainerSpec">put_container_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putDeploymentSpec">put_deployment_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putPackageSpec">put_package_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putSourceCodeSpec">put_source_code_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetAgentFramework">reset_agent_framework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetClassMethods">reset_class_methods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetContainerSpec">reset_container_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetDeploymentSpec">reset_deployment_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetIdentityType">reset_identity_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetPackageSpec">reset_package_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetSourceCodeSpec">reset_source_code_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_container_spec` <a name="put_container_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putContainerSpec"></a>

```python
def put_container_spec(
  image_uri: str
) -> None
```

###### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putContainerSpec.parameter.imageUri"></a>

- *Type:* str

The Artifact Registry Docker image URI (e.g., 'us-central1-docker.pkg.dev/my-project/my-repo/my-image:tag') of the container image that is to be run on each worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#image_uri GoogleVertexAiReasoningEngine#image_uri}

---

##### `put_deployment_spec` <a name="put_deployment_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putDeploymentSpec"></a>

```python
def put_deployment_spec(
  container_concurrency: typing.Union[int, float] = None,
  env: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv] = None,
  max_instances: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  psc_interface_config: GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig = None,
  resource_limits: typing.Mapping[str] = None,
  secret_env: IResolvable | typing.List[GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv] = None
) -> None
```

###### `container_concurrency`<sup>Optional</sup> <a name="container_concurrency" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putDeploymentSpec.parameter.containerConcurrency"></a>

- *Type:* typing.Union[int, float]

Optional. Concurrency for each container and agent server. Recommended value: 2 * cpu + 1. Defaults to 9.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#container_concurrency GoogleVertexAiReasoningEngine#container_concurrency}

---

###### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putDeploymentSpec.parameter.env"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a>]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#env GoogleVertexAiReasoningEngine#env}

---

###### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putDeploymentSpec.parameter.maxInstances"></a>

- *Type:* typing.Union[int, float]

Optional.

The maximum number of application instances that can be
launched to handle increased traffic. Defaults to 100.
Range: [1, 1000]. If VPC-SC or PSC-I is enabled, the acceptable
range is [1, 100].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#max_instances GoogleVertexAiReasoningEngine#max_instances}

---

###### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putDeploymentSpec.parameter.minInstances"></a>

- *Type:* typing.Union[int, float]

Optional.

The minimum number of application instances that will be
kept running at all times. Defaults to 1. Range: [0, 10].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#min_instances GoogleVertexAiReasoningEngine#min_instances}

---

###### `psc_interface_config`<sup>Optional</sup> <a name="psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putDeploymentSpec.parameter.pscInterfaceConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#psc_interface_config GoogleVertexAiReasoningEngine#psc_interface_config}

---

###### `resource_limits`<sup>Optional</sup> <a name="resource_limits" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putDeploymentSpec.parameter.resourceLimits"></a>

- *Type:* typing.Mapping[str]

Optional. Resource limits for each container. Only 'cpu' and 'memory' keys are supported.

Defaults to {"cpu": "4", "memory": "4Gi"}.

The only supported values for CPU are '1', '2', '4', '6' and '8'.
For more information, go to
https://cloud.google.com/run/docs/configuring/cpu.

The only supported values for memory are '1Gi', '2Gi', ... '32 Gi'.
For more information, go to
https://cloud.google.com/run/docs/configuring/memory-limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#resource_limits GoogleVertexAiReasoningEngine#resource_limits}

---

###### `secret_env`<sup>Optional</sup> <a name="secret_env" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putDeploymentSpec.parameter.secretEnv"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>]

secret_env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#secret_env GoogleVertexAiReasoningEngine#secret_env}

---

##### `put_package_spec` <a name="put_package_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putPackageSpec"></a>

```python
def put_package_spec(
  dependency_files_gcs_uri: str = None,
  pickle_object_gcs_uri: str = None,
  python_version: str = None,
  requirements_gcs_uri: str = None
) -> None
```

###### `dependency_files_gcs_uri`<sup>Optional</sup> <a name="dependency_files_gcs_uri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putPackageSpec.parameter.dependencyFilesGcsUri"></a>

- *Type:* str

Optional. The Cloud Storage URI of the dependency files in tar.gz format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#dependency_files_gcs_uri GoogleVertexAiReasoningEngine#dependency_files_gcs_uri}

---

###### `pickle_object_gcs_uri`<sup>Optional</sup> <a name="pickle_object_gcs_uri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putPackageSpec.parameter.pickleObjectGcsUri"></a>

- *Type:* str

Optional. The Cloud Storage URI of the pickled python object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#pickle_object_gcs_uri GoogleVertexAiReasoningEngine#pickle_object_gcs_uri}

---

###### `python_version`<sup>Optional</sup> <a name="python_version" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putPackageSpec.parameter.pythonVersion"></a>

- *Type:* str

Optional. The Python version. Currently support 3.8, 3.9, 3.10, 3.11, 3.12, 3.13. If not specified, default value is 3.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#python_version GoogleVertexAiReasoningEngine#python_version}

---

###### `requirements_gcs_uri`<sup>Optional</sup> <a name="requirements_gcs_uri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putPackageSpec.parameter.requirementsGcsUri"></a>

- *Type:* str

Optional. The Cloud Storage URI of the requirements.txtfile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#requirements_gcs_uri GoogleVertexAiReasoningEngine#requirements_gcs_uri}

---

##### `put_source_code_spec` <a name="put_source_code_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putSourceCodeSpec"></a>

```python
def put_source_code_spec(
  developer_connect_source: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource = None,
  image_spec: GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec = None,
  inline_source: GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource = None,
  python_spec: GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec = None
) -> None
```

###### `developer_connect_source`<sup>Optional</sup> <a name="developer_connect_source" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putSourceCodeSpec.parameter.developerConnectSource"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a>

developer_connect_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#developer_connect_source GoogleVertexAiReasoningEngine#developer_connect_source}

---

###### `image_spec`<sup>Optional</sup> <a name="image_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putSourceCodeSpec.parameter.imageSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a>

image_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#image_spec GoogleVertexAiReasoningEngine#image_spec}

---

###### `inline_source`<sup>Optional</sup> <a name="inline_source" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putSourceCodeSpec.parameter.inlineSource"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a>

inline_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#inline_source GoogleVertexAiReasoningEngine#inline_source}

---

###### `python_spec`<sup>Optional</sup> <a name="python_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putSourceCodeSpec.parameter.pythonSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a>

python_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#python_spec GoogleVertexAiReasoningEngine#python_spec}

---

##### `reset_agent_framework` <a name="reset_agent_framework" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetAgentFramework"></a>

```python
def reset_agent_framework() -> None
```

##### `reset_class_methods` <a name="reset_class_methods" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetClassMethods"></a>

```python
def reset_class_methods() -> None
```

##### `reset_container_spec` <a name="reset_container_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetContainerSpec"></a>

```python
def reset_container_spec() -> None
```

##### `reset_deployment_spec` <a name="reset_deployment_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetDeploymentSpec"></a>

```python
def reset_deployment_spec() -> None
```

##### `reset_identity_type` <a name="reset_identity_type" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetIdentityType"></a>

```python
def reset_identity_type() -> None
```

##### `reset_package_spec` <a name="reset_package_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetPackageSpec"></a>

```python
def reset_package_spec() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_source_code_spec` <a name="reset_source_code_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetSourceCodeSpec"></a>

```python
def reset_source_code_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.containerSpec">container_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference">GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.deploymentSpec">deployment_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference">GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.effectiveIdentity">effective_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.packageSpec">package_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference">GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.sourceCodeSpec">source_code_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.agentFrameworkInput">agent_framework_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.classMethodsInput">class_methods_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.containerSpecInput">container_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec">GoogleVertexAiReasoningEngineSpecContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.deploymentSpecInput">deployment_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec">GoogleVertexAiReasoningEngineSpecDeploymentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.identityTypeInput">identity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.packageSpecInput">package_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec">GoogleVertexAiReasoningEngineSpecPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.sourceCodeSpecInput">source_code_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.agentFramework">agent_framework</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.classMethods">class_methods</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.identityType">identity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec">GoogleVertexAiReasoningEngineSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_spec`<sup>Required</sup> <a name="container_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.containerSpec"></a>

```python
container_spec: GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference">GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference</a>

---

##### `deployment_spec`<sup>Required</sup> <a name="deployment_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.deploymentSpec"></a>

```python
deployment_spec: GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference">GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference</a>

---

##### `effective_identity`<sup>Required</sup> <a name="effective_identity" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.effectiveIdentity"></a>

```python
effective_identity: str
```

- *Type:* str

---

##### `package_spec`<sup>Required</sup> <a name="package_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.packageSpec"></a>

```python
package_spec: GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference">GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference</a>

---

##### `source_code_spec`<sup>Required</sup> <a name="source_code_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.sourceCodeSpec"></a>

```python
source_code_spec: GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference</a>

---

##### `agent_framework_input`<sup>Optional</sup> <a name="agent_framework_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.agentFrameworkInput"></a>

```python
agent_framework_input: str
```

- *Type:* str

---

##### `class_methods_input`<sup>Optional</sup> <a name="class_methods_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.classMethodsInput"></a>

```python
class_methods_input: str
```

- *Type:* str

---

##### `container_spec_input`<sup>Optional</sup> <a name="container_spec_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.containerSpecInput"></a>

```python
container_spec_input: GoogleVertexAiReasoningEngineSpecContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec">GoogleVertexAiReasoningEngineSpecContainerSpec</a>

---

##### `deployment_spec_input`<sup>Optional</sup> <a name="deployment_spec_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.deploymentSpecInput"></a>

```python
deployment_spec_input: GoogleVertexAiReasoningEngineSpecDeploymentSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec">GoogleVertexAiReasoningEngineSpecDeploymentSpec</a>

---

##### `identity_type_input`<sup>Optional</sup> <a name="identity_type_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.identityTypeInput"></a>

```python
identity_type_input: str
```

- *Type:* str

---

##### `package_spec_input`<sup>Optional</sup> <a name="package_spec_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.packageSpecInput"></a>

```python
package_spec_input: GoogleVertexAiReasoningEngineSpecPackageSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec">GoogleVertexAiReasoningEngineSpecPackageSpec</a>

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `source_code_spec_input`<sup>Optional</sup> <a name="source_code_spec_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.sourceCodeSpecInput"></a>

```python
source_code_spec_input: GoogleVertexAiReasoningEngineSpecSourceCodeSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpec</a>

---

##### `agent_framework`<sup>Required</sup> <a name="agent_framework" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.agentFramework"></a>

```python
agent_framework: str
```

- *Type:* str

---

##### `class_methods`<sup>Required</sup> <a name="class_methods" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.classMethods"></a>

```python
class_methods: str
```

- *Type:* str

---

##### `identity_type`<sup>Required</sup> <a name="identity_type" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec">GoogleVertexAiReasoningEngineSpec</a>

---


### GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference <a name="GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resetDependencyFilesGcsUri">reset_dependency_files_gcs_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resetPickleObjectGcsUri">reset_pickle_object_gcs_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resetPythonVersion">reset_python_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resetRequirementsGcsUri">reset_requirements_gcs_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dependency_files_gcs_uri` <a name="reset_dependency_files_gcs_uri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resetDependencyFilesGcsUri"></a>

```python
def reset_dependency_files_gcs_uri() -> None
```

##### `reset_pickle_object_gcs_uri` <a name="reset_pickle_object_gcs_uri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resetPickleObjectGcsUri"></a>

```python
def reset_pickle_object_gcs_uri() -> None
```

##### `reset_python_version` <a name="reset_python_version" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resetPythonVersion"></a>

```python
def reset_python_version() -> None
```

##### `reset_requirements_gcs_uri` <a name="reset_requirements_gcs_uri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resetRequirementsGcsUri"></a>

```python
def reset_requirements_gcs_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.dependencyFilesGcsUriInput">dependency_files_gcs_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.pickleObjectGcsUriInput">pickle_object_gcs_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.pythonVersionInput">python_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.requirementsGcsUriInput">requirements_gcs_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.dependencyFilesGcsUri">dependency_files_gcs_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.pickleObjectGcsUri">pickle_object_gcs_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.pythonVersion">python_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.requirementsGcsUri">requirements_gcs_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec">GoogleVertexAiReasoningEngineSpecPackageSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dependency_files_gcs_uri_input`<sup>Optional</sup> <a name="dependency_files_gcs_uri_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.dependencyFilesGcsUriInput"></a>

```python
dependency_files_gcs_uri_input: str
```

- *Type:* str

---

##### `pickle_object_gcs_uri_input`<sup>Optional</sup> <a name="pickle_object_gcs_uri_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.pickleObjectGcsUriInput"></a>

```python
pickle_object_gcs_uri_input: str
```

- *Type:* str

---

##### `python_version_input`<sup>Optional</sup> <a name="python_version_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.pythonVersionInput"></a>

```python
python_version_input: str
```

- *Type:* str

---

##### `requirements_gcs_uri_input`<sup>Optional</sup> <a name="requirements_gcs_uri_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.requirementsGcsUriInput"></a>

```python
requirements_gcs_uri_input: str
```

- *Type:* str

---

##### `dependency_files_gcs_uri`<sup>Required</sup> <a name="dependency_files_gcs_uri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.dependencyFilesGcsUri"></a>

```python
dependency_files_gcs_uri: str
```

- *Type:* str

---

##### `pickle_object_gcs_uri`<sup>Required</sup> <a name="pickle_object_gcs_uri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.pickleObjectGcsUri"></a>

```python
pickle_object_gcs_uri: str
```

- *Type:* str

---

##### `python_version`<sup>Required</sup> <a name="python_version" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.pythonVersion"></a>

```python
python_version: str
```

- *Type:* str

---

##### `requirements_gcs_uri`<sup>Required</sup> <a name="requirements_gcs_uri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.requirementsGcsUri"></a>

```python
requirements_gcs_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineSpecPackageSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec">GoogleVertexAiReasoningEngineSpecPackageSpec</a>

---


### GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.dirInput">dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.gitRepositoryLinkInput">git_repository_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.revisionInput">revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.dir">dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.gitRepositoryLink">git_repository_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dir_input`<sup>Optional</sup> <a name="dir_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.dirInput"></a>

```python
dir_input: str
```

- *Type:* str

---

##### `git_repository_link_input`<sup>Optional</sup> <a name="git_repository_link_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.gitRepositoryLinkInput"></a>

```python
git_repository_link_input: str
```

- *Type:* str

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.revisionInput"></a>

```python
revision_input: str
```

- *Type:* str

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.dir"></a>

```python
dir: str
```

- *Type:* str

---

##### `git_repository_link`<sup>Required</sup> <a name="git_repository_link" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.gitRepositoryLink"></a>

```python
git_repository_link: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a>

---


### GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.putConfig">put_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_config` <a name="put_config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.putConfig"></a>

```python
def put_config(
  dir: str,
  git_repository_link: str,
  revision: str
) -> None
```

###### `dir`<sup>Required</sup> <a name="dir" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.putConfig.parameter.dir"></a>

- *Type:* str

Directory, relative to the source root, in which to run the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#dir GoogleVertexAiReasoningEngine#dir}

---

###### `git_repository_link`<sup>Required</sup> <a name="git_repository_link" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.putConfig.parameter.gitRepositoryLink"></a>

- *Type:* str

The Developer Connect Git repository link, formatted as projects/* /locations/* /connections/* /gitRepositoryLink/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#git_repository_link GoogleVertexAiReasoningEngine#git_repository_link}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

###### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.putConfig.parameter.revision"></a>

- *Type:* str

The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#revision GoogleVertexAiReasoningEngine#revision}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.configInput">config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.config"></a>

```python
config: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.configInput"></a>

```python
config_input: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a>

---


### GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resetBuildArgs">reset_build_args</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_build_args` <a name="reset_build_args" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resetBuildArgs"></a>

```python
def reset_build_args() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.buildArgsInput">build_args_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.buildArgs">build_args</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `build_args_input`<sup>Optional</sup> <a name="build_args_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.buildArgsInput"></a>

```python
build_args_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `build_args`<sup>Required</sup> <a name="build_args" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.buildArgs"></a>

```python
build_args: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a>

---


### GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resetSourceArchive">reset_source_archive</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_archive` <a name="reset_source_archive" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resetSourceArchive"></a>

```python
def reset_source_archive() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.sourceArchiveInput">source_archive_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.sourceArchive">source_archive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_archive_input`<sup>Optional</sup> <a name="source_archive_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.sourceArchiveInput"></a>

```python
source_archive_input: str
```

- *Type:* str

---

##### `source_archive`<sup>Required</sup> <a name="source_archive" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.sourceArchive"></a>

```python
source_archive: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a>

---


### GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putDeveloperConnectSource">put_developer_connect_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putImageSpec">put_image_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putInlineSource">put_inline_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putPythonSpec">put_python_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetDeveloperConnectSource">reset_developer_connect_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetImageSpec">reset_image_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetInlineSource">reset_inline_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetPythonSpec">reset_python_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_developer_connect_source` <a name="put_developer_connect_source" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putDeveloperConnectSource"></a>

```python
def put_developer_connect_source(
  config: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig
) -> None
```

###### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putDeveloperConnectSource.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#config GoogleVertexAiReasoningEngine#config}

---

##### `put_image_spec` <a name="put_image_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putImageSpec"></a>

```python
def put_image_spec(
  build_args: typing.Mapping[str] = None
) -> None
```

###### `build_args`<sup>Optional</sup> <a name="build_args" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putImageSpec.parameter.buildArgs"></a>

- *Type:* typing.Mapping[str]

Build arguments to be used. They will be passed through --build-arg flags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#build_args GoogleVertexAiReasoningEngine#build_args}

---

##### `put_inline_source` <a name="put_inline_source" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putInlineSource"></a>

```python
def put_inline_source(
  source_archive: str = None
) -> None
```

###### `source_archive`<sup>Optional</sup> <a name="source_archive" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putInlineSource.parameter.sourceArchive"></a>

- *Type:* str

Required. Input only. The application source code archive, provided as a compressed tarball (.tar.gz) file. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#source_archive GoogleVertexAiReasoningEngine#source_archive}

---

##### `put_python_spec` <a name="put_python_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putPythonSpec"></a>

```python
def put_python_spec(
  entrypoint_module: str = None,
  entrypoint_object: str = None,
  requirements_file: str = None,
  version: str = None
) -> None
```

###### `entrypoint_module`<sup>Optional</sup> <a name="entrypoint_module" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putPythonSpec.parameter.entrypointModule"></a>

- *Type:* str

Optional.

The Python module to load as the entrypoint,
specified as a fully qualified module name. For example:
path.to.agent. If not specified, defaults to "agent".
The project root will be added to Python sys.path, allowing
imports to be specified relative to the root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#entrypoint_module GoogleVertexAiReasoningEngine#entrypoint_module}

---

###### `entrypoint_object`<sup>Optional</sup> <a name="entrypoint_object" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putPythonSpec.parameter.entrypointObject"></a>

- *Type:* str

Optional. The name of the callable object within the entrypointModule to use as the application If not specified, defaults to "root_agent".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#entrypoint_object GoogleVertexAiReasoningEngine#entrypoint_object}

---

###### `requirements_file`<sup>Optional</sup> <a name="requirements_file" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putPythonSpec.parameter.requirementsFile"></a>

- *Type:* str

Optional. The path to the requirements file, relative to the source root. If not specified, defaults to "requirements.txt".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#requirements_file GoogleVertexAiReasoningEngine#requirements_file}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putPythonSpec.parameter.version"></a>

- *Type:* str

Optional.

The version of Python to use. Support version
includes 3.9, 3.10, 3.11, 3.12, 3.13. If not specified,
default value is 3.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine#version GoogleVertexAiReasoningEngine#version}

---

##### `reset_developer_connect_source` <a name="reset_developer_connect_source" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetDeveloperConnectSource"></a>

```python
def reset_developer_connect_source() -> None
```

##### `reset_image_spec` <a name="reset_image_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetImageSpec"></a>

```python
def reset_image_spec() -> None
```

##### `reset_inline_source` <a name="reset_inline_source" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetInlineSource"></a>

```python
def reset_inline_source() -> None
```

##### `reset_python_spec` <a name="reset_python_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetPythonSpec"></a>

```python
def reset_python_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.developerConnectSource">developer_connect_source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.imageSpec">image_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.inlineSource">inline_source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.pythonSpec">python_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.developerConnectSourceInput">developer_connect_source_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.imageSpecInput">image_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.inlineSourceInput">inline_source_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.pythonSpecInput">python_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `developer_connect_source`<sup>Required</sup> <a name="developer_connect_source" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.developerConnectSource"></a>

```python
developer_connect_source: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference</a>

---

##### `image_spec`<sup>Required</sup> <a name="image_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.imageSpec"></a>

```python
image_spec: GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference</a>

---

##### `inline_source`<sup>Required</sup> <a name="inline_source" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.inlineSource"></a>

```python
inline_source: GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference</a>

---

##### `python_spec`<sup>Required</sup> <a name="python_spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.pythonSpec"></a>

```python
python_spec: GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference</a>

---

##### `developer_connect_source_input`<sup>Optional</sup> <a name="developer_connect_source_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.developerConnectSourceInput"></a>

```python
developer_connect_source_input: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a>

---

##### `image_spec_input`<sup>Optional</sup> <a name="image_spec_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.imageSpecInput"></a>

```python
image_spec_input: GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a>

---

##### `inline_source_input`<sup>Optional</sup> <a name="inline_source_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.inlineSourceInput"></a>

```python
inline_source_input: GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a>

---

##### `python_spec_input`<sup>Optional</sup> <a name="python_spec_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.pythonSpecInput"></a>

```python
python_spec_input: GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineSpecSourceCodeSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpec</a>

---


### GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetEntrypointModule">reset_entrypoint_module</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetEntrypointObject">reset_entrypoint_object</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetRequirementsFile">reset_requirements_file</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_entrypoint_module` <a name="reset_entrypoint_module" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetEntrypointModule"></a>

```python
def reset_entrypoint_module() -> None
```

##### `reset_entrypoint_object` <a name="reset_entrypoint_object" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetEntrypointObject"></a>

```python
def reset_entrypoint_object() -> None
```

##### `reset_requirements_file` <a name="reset_requirements_file" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetRequirementsFile"></a>

```python
def reset_requirements_file() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointModuleInput">entrypoint_module_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointObjectInput">entrypoint_object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.requirementsFileInput">requirements_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointModule">entrypoint_module</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointObject">entrypoint_object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.requirementsFile">requirements_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entrypoint_module_input`<sup>Optional</sup> <a name="entrypoint_module_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointModuleInput"></a>

```python
entrypoint_module_input: str
```

- *Type:* str

---

##### `entrypoint_object_input`<sup>Optional</sup> <a name="entrypoint_object_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointObjectInput"></a>

```python
entrypoint_object_input: str
```

- *Type:* str

---

##### `requirements_file_input`<sup>Optional</sup> <a name="requirements_file_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.requirementsFileInput"></a>

```python
requirements_file_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `entrypoint_module`<sup>Required</sup> <a name="entrypoint_module" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointModule"></a>

```python
entrypoint_module: str
```

- *Type:* str

---

##### `entrypoint_object`<sup>Required</sup> <a name="entrypoint_object" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointObject"></a>

```python
entrypoint_object: str
```

- *Type:* str

---

##### `requirements_file`<sup>Required</sup> <a name="requirements_file" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.requirementsFile"></a>

```python
requirements_file: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a>

---


### GoogleVertexAiReasoningEngineTimeoutsOutputReference <a name="GoogleVertexAiReasoningEngineTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_reasoning_engine

googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts">GoogleVertexAiReasoningEngineTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiReasoningEngineTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts">GoogleVertexAiReasoningEngineTimeouts</a>

---



