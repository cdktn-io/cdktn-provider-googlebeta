# `googleComputeManagedSslCertificate` Submodule <a name="`googleComputeManagedSslCertificate` Submodule" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeManagedSslCertificate <a name="GoogleComputeManagedSslCertificate" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate google_compute_managed_ssl_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_managed_ssl_certificate

googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  managed: GoogleComputeManagedSslCertificateManaged = None,
  name: str = None,
  project: str = None,
  timeouts: GoogleComputeManagedSslCertificateTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#id GoogleComputeManagedSslCertificate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.managed">managed</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManaged">GoogleComputeManagedSslCertificateManaged</a></code> | managed block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#project GoogleComputeManagedSslCertificate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeouts">GoogleComputeManagedSslCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.type">type</a></code> | <code>str</code> | Enum field whose value is always 'MANAGED' - used to signal to the API which type this is. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#deletion_policy GoogleComputeManagedSslCertificate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#description GoogleComputeManagedSslCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#id GoogleComputeManagedSslCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.managed"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManaged">GoogleComputeManagedSslCertificateManaged</a>

managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#managed GoogleComputeManagedSslCertificate#managed}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

These are in the same namespace as the managed SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#name GoogleComputeManagedSslCertificate#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#project GoogleComputeManagedSslCertificate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeouts">GoogleComputeManagedSslCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#timeouts GoogleComputeManagedSslCertificate#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.Initializer.parameter.type"></a>

- *Type:* str

Enum field whose value is always 'MANAGED' - used to signal to the API which type this is.

Default value: "MANAGED" Possible values: ["MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#type GoogleComputeManagedSslCertificate#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.putManaged">put_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetManaged">reset_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_managed` <a name="put_managed" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.putManaged"></a>

```python
def put_managed(
  domains: typing.List[str]
) -> None
```

###### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.putManaged.parameter.domains"></a>

- *Type:* typing.List[str]

Domains for which a managed SSL certificate will be valid.

Currently,
there can be up to 100 domains in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#domains GoogleComputeManagedSslCertificate#domains}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#create GoogleComputeManagedSslCertificate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#delete GoogleComputeManagedSslCertificate#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_managed` <a name="reset_managed" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetManaged"></a>

```python
def reset_managed() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleComputeManagedSslCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_compute_managed_ssl_certificate

googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_compute_managed_ssl_certificate

googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_compute_managed_ssl_certificate

googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_compute_managed_ssl_certificate

googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleComputeManagedSslCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeManagedSslCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeManagedSslCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeManagedSslCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.certificateId">certificate_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.managed">managed</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference">GoogleComputeManagedSslCertificateManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference">GoogleComputeManagedSslCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.managedInput">managed_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManaged">GoogleComputeManagedSslCertificateManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeouts">GoogleComputeManagedSslCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.certificateId"></a>

```python
certificate_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.managed"></a>

```python
managed: GoogleComputeManagedSslCertificateManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference">GoogleComputeManagedSslCertificateManagedOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.timeouts"></a>

```python
timeouts: GoogleComputeManagedSslCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference">GoogleComputeManagedSslCertificateTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_input`<sup>Optional</sup> <a name="managed_input" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.managedInput"></a>

```python
managed_input: GoogleComputeManagedSslCertificateManaged
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManaged">GoogleComputeManagedSslCertificateManaged</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleComputeManagedSslCertificateTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeouts">GoogleComputeManagedSslCertificateTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeManagedSslCertificateConfig <a name="GoogleComputeManagedSslCertificateConfig" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_managed_ssl_certificate

googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  managed: GoogleComputeManagedSslCertificateManaged = None,
  name: str = None,
  project: str = None,
  timeouts: GoogleComputeManagedSslCertificateTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#id GoogleComputeManagedSslCertificate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.managed">managed</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManaged">GoogleComputeManagedSslCertificateManaged</a></code> | managed block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#project GoogleComputeManagedSslCertificate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeouts">GoogleComputeManagedSslCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.type">type</a></code> | <code>str</code> | Enum field whose value is always 'MANAGED' - used to signal to the API which type this is. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#deletion_policy GoogleComputeManagedSslCertificate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#description GoogleComputeManagedSslCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#id GoogleComputeManagedSslCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.managed"></a>

```python
managed: GoogleComputeManagedSslCertificateManaged
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManaged">GoogleComputeManagedSslCertificateManaged</a>

managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#managed GoogleComputeManagedSslCertificate#managed}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

These are in the same namespace as the managed SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#name GoogleComputeManagedSslCertificate#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#project GoogleComputeManagedSslCertificate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeManagedSslCertificateTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeouts">GoogleComputeManagedSslCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#timeouts GoogleComputeManagedSslCertificate#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Enum field whose value is always 'MANAGED' - used to signal to the API which type this is.

Default value: "MANAGED" Possible values: ["MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#type GoogleComputeManagedSslCertificate#type}

---

### GoogleComputeManagedSslCertificateManaged <a name="GoogleComputeManagedSslCertificateManaged" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManaged.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_managed_ssl_certificate

googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManaged(
  domains: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManaged.property.domains">domains</a></code> | <code>typing.List[str]</code> | Domains for which a managed SSL certificate will be valid. |

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManaged.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

Domains for which a managed SSL certificate will be valid.

Currently,
there can be up to 100 domains in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#domains GoogleComputeManagedSslCertificate#domains}

---

### GoogleComputeManagedSslCertificateTimeouts <a name="GoogleComputeManagedSslCertificateTimeouts" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_managed_ssl_certificate

googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#create GoogleComputeManagedSslCertificate#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#delete GoogleComputeManagedSslCertificate#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#create GoogleComputeManagedSslCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_managed_ssl_certificate#delete GoogleComputeManagedSslCertificate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeManagedSslCertificateManagedOutputReference <a name="GoogleComputeManagedSslCertificateManagedOutputReference" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_managed_ssl_certificate

googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.property.domainsInput">domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.property.domains">domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManaged">GoogleComputeManagedSslCertificateManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domains_input`<sup>Optional</sup> <a name="domains_input" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.property.domainsInput"></a>

```python
domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManagedOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeManagedSslCertificateManaged
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateManaged">GoogleComputeManagedSslCertificateManaged</a>

---


### GoogleComputeManagedSslCertificateTimeoutsOutputReference <a name="GoogleComputeManagedSslCertificateTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_managed_ssl_certificate

googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeouts">GoogleComputeManagedSslCertificateTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeManagedSslCertificateTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeManagedSslCertificate.GoogleComputeManagedSslCertificateTimeouts">GoogleComputeManagedSslCertificateTimeouts</a>

---



