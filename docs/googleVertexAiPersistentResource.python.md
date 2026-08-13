# `googleVertexAiPersistentResource` Submodule <a name="`googleVertexAiPersistentResource` Submodule" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiPersistentResource <a name="GoogleVertexAiPersistentResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource google_vertex_ai_persistent_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResource(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  resource_pools: IResolvable | typing.List[GoogleVertexAiPersistentResourceResourcePools],
  deletion_policy: str = None,
  display_name: str = None,
  encryption_spec: GoogleVertexAiPersistentResourceEncryptionSpec = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  network: str = None,
  project: str = None,
  psc_interface_config: GoogleVertexAiPersistentResourcePscInterfaceConfig = None,
  reserved_ip_ranges: typing.List[str] = None,
  resource_runtime_spec: GoogleVertexAiPersistentResourceResourceRuntimeSpec = None,
  timeouts: GoogleVertexAiPersistentResourceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID to use for the PersistentResource, which become the final component of the PersistentResource's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.resourcePools">resource_pools</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>]</code> | resource_pools block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the PersistentResource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#id GoogleVertexAiPersistentResource#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize PersistentResource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the PersistentResource. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.network">network</a></code> | <code>str</code> | The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to peered with Vertex AI to host the persistent resources. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#project GoogleVertexAiPersistentResource#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.pscInterfaceConfig">psc_interface_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.reservedIpRanges">reserved_ip_ranges</a></code> | <code>typing.List[str]</code> | A list of names for the reserved IP ranges under the VPC network that can be used for this persistent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.resourceRuntimeSpec">resource_runtime_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a></code> | resource_runtime_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.name"></a>

- *Type:* str

The ID to use for the PersistentResource, which become the final component of the PersistentResource's resource name.

The maximum length is 63 characters, and valid characters
are '/^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#name GoogleVertexAiPersistentResource#name}

---

##### `resource_pools`<sup>Required</sup> <a name="resource_pools" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.resourcePools"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>]

resource_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#resource_pools GoogleVertexAiPersistentResource#resource_pools}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#deletion_policy GoogleVertexAiPersistentResource#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the PersistentResource.

The name can be up to 128 characters long and can consist of any UTF-8
characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#display_name GoogleVertexAiPersistentResource#display_name}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#encryption_spec GoogleVertexAiPersistentResource#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#id GoogleVertexAiPersistentResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize PersistentResource.

Label keys and values can be no longer than 64 characters
(Unicode codepoints), can only contain lowercase letters, numeric
characters, underscores and dashes. International characters are allowed.

See https://goo.gl/xmQnxf for more information and examples of labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#labels GoogleVertexAiPersistentResource#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.location"></a>

- *Type:* str

The location of the PersistentResource. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#location GoogleVertexAiPersistentResource#location}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.network"></a>

- *Type:* str

The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to peered with Vertex AI to host the persistent resources.

For example, 'projects/12345/global/networks/myVPC'.
[Format](/compute/docs/reference/rest/v1/networks/insert)
is of the form 'projects/{project}/global/networks/{network}'.
Where {project} is a project number, as in '12345', and {network} is a
network name.

To specify this field, you must have already [configured VPC Network
Peering for Vertex
AI](https://cloud.google.com/vertex-ai/docs/general/vpc-peering).

If this field is left unspecified, the resources aren't peered with any
network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#network GoogleVertexAiPersistentResource#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#project GoogleVertexAiPersistentResource#project}.

---

##### `psc_interface_config`<sup>Optional</sup> <a name="psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.pscInterfaceConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#psc_interface_config GoogleVertexAiPersistentResource#psc_interface_config}

---

##### `reserved_ip_ranges`<sup>Optional</sup> <a name="reserved_ip_ranges" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.reservedIpRanges"></a>

- *Type:* typing.List[str]

A list of names for the reserved IP ranges under the VPC network that can be used for this persistent resource.

If set, we will deploy the persistent resource within the provided IP
ranges. Otherwise, the persistent resource is deployed to any IP
ranges under the provided VPC network.

Example: ['vertex-ai-ip-range'].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#reserved_ip_ranges GoogleVertexAiPersistentResource#reserved_ip_ranges}

---

##### `resource_runtime_spec`<sup>Optional</sup> <a name="resource_runtime_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.resourceRuntimeSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a>

resource_runtime_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#resource_runtime_spec GoogleVertexAiPersistentResource#resource_runtime_spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#timeouts GoogleVertexAiPersistentResource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putPscInterfaceConfig">put_psc_interface_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourcePools">put_resource_pools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourceRuntimeSpec">put_resource_runtime_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetPscInterfaceConfig">reset_psc_interface_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetReservedIpRanges">reset_reserved_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetResourceRuntimeSpec">reset_resource_runtime_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putEncryptionSpec.parameter.kmsKeyName"></a>

- *Type:* str

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have
the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#kms_key_name GoogleVertexAiPersistentResource#kms_key_name}

---

##### `put_psc_interface_config` <a name="put_psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putPscInterfaceConfig"></a>

```python
def put_psc_interface_config(
  dns_peering_configs: IResolvable | typing.List[GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs] = None,
  network_attachment: str = None
) -> None
```

###### `dns_peering_configs`<sup>Optional</sup> <a name="dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putPscInterfaceConfig.parameter.dnsPeeringConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a>]

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#dns_peering_configs GoogleVertexAiPersistentResource#dns_peering_configs}

---

###### `network_attachment`<sup>Optional</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putPscInterfaceConfig.parameter.networkAttachment"></a>

- *Type:* str

The name of the Compute Engine [network attachment](https://cloud.google.com/vpc/docs/about-network-attachments) to attach to the resource within the region and user project. To specify this field, you must have already [created a network attachment] (https://cloud.google.com/vpc/docs/create-manage-network-attachments#create-network-attachments). This field is only used for resources using PSC-I.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#network_attachment GoogleVertexAiPersistentResource#network_attachment}

---

##### `put_resource_pools` <a name="put_resource_pools" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourcePools"></a>

```python
def put_resource_pools(
  value: IResolvable | typing.List[GoogleVertexAiPersistentResourceResourcePools]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourcePools.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>]

---

##### `put_resource_runtime_spec` <a name="put_resource_runtime_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourceRuntimeSpec"></a>

```python
def put_resource_runtime_spec(
  service_account_spec: GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec = None
) -> None
```

###### `service_account_spec`<sup>Optional</sup> <a name="service_account_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourceRuntimeSpec.parameter.serviceAccountSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a>

service_account_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#service_account_spec GoogleVertexAiPersistentResource#service_account_spec}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#create GoogleVertexAiPersistentResource#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#delete GoogleVertexAiPersistentResource#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#update GoogleVertexAiPersistentResource#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_psc_interface_config` <a name="reset_psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetPscInterfaceConfig"></a>

```python
def reset_psc_interface_config() -> None
```

##### `reset_reserved_ip_ranges` <a name="reset_reserved_ip_ranges" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetReservedIpRanges"></a>

```python
def reset_reserved_ip_ranges() -> None
```

##### `reset_resource_runtime_spec` <a name="reset_resource_runtime_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetResourceRuntimeSpec"></a>

```python
def reset_resource_runtime_spec() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVertexAiPersistentResource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVertexAiPersistentResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiPersistentResource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiPersistentResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiPersistentResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference">GoogleVertexAiPersistentResourceEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList">GoogleVertexAiPersistentResourceErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.pscInterfaceConfig">psc_interface_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference">GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourcePools">resource_pools</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList">GoogleVertexAiPersistentResourceResourcePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntime">resource_runtime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList">GoogleVertexAiPersistentResourceResourceRuntimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntimeSpec">resource_runtime_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference">GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.satisfiesPzi">satisfies_pzi</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.satisfiesPzs">satisfies_pzs</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference">GoogleVertexAiPersistentResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.pscInterfaceConfigInput">psc_interface_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.reservedIpRangesInput">reserved_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourcePoolsInput">resource_pools_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntimeSpecInput">resource_runtime_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.reservedIpRanges">reserved_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiPersistentResourceEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference">GoogleVertexAiPersistentResourceEncryptionSpecOutputReference</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.error"></a>

```python
error: GoogleVertexAiPersistentResourceErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList">GoogleVertexAiPersistentResourceErrorList</a>

---

##### `psc_interface_config`<sup>Required</sup> <a name="psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.pscInterfaceConfig"></a>

```python
psc_interface_config: GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference">GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference</a>

---

##### `resource_pools`<sup>Required</sup> <a name="resource_pools" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourcePools"></a>

```python
resource_pools: GoogleVertexAiPersistentResourceResourcePoolsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList">GoogleVertexAiPersistentResourceResourcePoolsList</a>

---

##### `resource_runtime`<sup>Required</sup> <a name="resource_runtime" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntime"></a>

```python
resource_runtime: GoogleVertexAiPersistentResourceResourceRuntimeList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList">GoogleVertexAiPersistentResourceResourceRuntimeList</a>

---

##### `resource_runtime_spec`<sup>Required</sup> <a name="resource_runtime_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntimeSpec"></a>

```python
resource_runtime_spec: GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference">GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference</a>

---

##### `satisfies_pzi`<sup>Required</sup> <a name="satisfies_pzi" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.satisfiesPzi"></a>

```python
satisfies_pzi: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `satisfies_pzs`<sup>Required</sup> <a name="satisfies_pzs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.satisfiesPzs"></a>

```python
satisfies_pzs: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.timeouts"></a>

```python
timeouts: GoogleVertexAiPersistentResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference">GoogleVertexAiPersistentResourceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.encryptionSpecInput"></a>

```python
encryption_spec_input: GoogleVertexAiPersistentResourceEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `psc_interface_config_input`<sup>Optional</sup> <a name="psc_interface_config_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.pscInterfaceConfigInput"></a>

```python
psc_interface_config_input: GoogleVertexAiPersistentResourcePscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a>

---

##### `reserved_ip_ranges_input`<sup>Optional</sup> <a name="reserved_ip_ranges_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.reservedIpRangesInput"></a>

```python
reserved_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_pools_input`<sup>Optional</sup> <a name="resource_pools_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourcePoolsInput"></a>

```python
resource_pools_input: IResolvable | typing.List[GoogleVertexAiPersistentResourceResourcePools]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>]

---

##### `resource_runtime_spec_input`<sup>Optional</sup> <a name="resource_runtime_spec_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntimeSpecInput"></a>

```python
resource_runtime_spec_input: GoogleVertexAiPersistentResourceResourceRuntimeSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVertexAiPersistentResourceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `reserved_ip_ranges`<sup>Required</sup> <a name="reserved_ip_ranges" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.reservedIpRanges"></a>

```python
reserved_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiPersistentResourceConfig <a name="GoogleVertexAiPersistentResourceConfig" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  resource_pools: IResolvable | typing.List[GoogleVertexAiPersistentResourceResourcePools],
  deletion_policy: str = None,
  display_name: str = None,
  encryption_spec: GoogleVertexAiPersistentResourceEncryptionSpec = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  network: str = None,
  project: str = None,
  psc_interface_config: GoogleVertexAiPersistentResourcePscInterfaceConfig = None,
  reserved_ip_ranges: typing.List[str] = None,
  resource_runtime_spec: GoogleVertexAiPersistentResourceResourceRuntimeSpec = None,
  timeouts: GoogleVertexAiPersistentResourceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.name">name</a></code> | <code>str</code> | The ID to use for the PersistentResource, which become the final component of the PersistentResource's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.resourcePools">resource_pools</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>]</code> | resource_pools block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the PersistentResource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#id GoogleVertexAiPersistentResource#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize PersistentResource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.location">location</a></code> | <code>str</code> | The location of the PersistentResource. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.network">network</a></code> | <code>str</code> | The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to peered with Vertex AI to host the persistent resources. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#project GoogleVertexAiPersistentResource#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.pscInterfaceConfig">psc_interface_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.reservedIpRanges">reserved_ip_ranges</a></code> | <code>typing.List[str]</code> | A list of names for the reserved IP ranges under the VPC network that can be used for this persistent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.resourceRuntimeSpec">resource_runtime_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a></code> | resource_runtime_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID to use for the PersistentResource, which become the final component of the PersistentResource's resource name.

The maximum length is 63 characters, and valid characters
are '/^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#name GoogleVertexAiPersistentResource#name}

---

##### `resource_pools`<sup>Required</sup> <a name="resource_pools" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.resourcePools"></a>

```python
resource_pools: IResolvable | typing.List[GoogleVertexAiPersistentResourceResourcePools]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>]

resource_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#resource_pools GoogleVertexAiPersistentResource#resource_pools}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#deletion_policy GoogleVertexAiPersistentResource#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the PersistentResource.

The name can be up to 128 characters long and can consist of any UTF-8
characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#display_name GoogleVertexAiPersistentResource#display_name}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiPersistentResourceEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#encryption_spec GoogleVertexAiPersistentResource#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#id GoogleVertexAiPersistentResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize PersistentResource.

Label keys and values can be no longer than 64 characters
(Unicode codepoints), can only contain lowercase letters, numeric
characters, underscores and dashes. International characters are allowed.

See https://goo.gl/xmQnxf for more information and examples of labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#labels GoogleVertexAiPersistentResource#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the PersistentResource. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#location GoogleVertexAiPersistentResource#location}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to peered with Vertex AI to host the persistent resources.

For example, 'projects/12345/global/networks/myVPC'.
[Format](/compute/docs/reference/rest/v1/networks/insert)
is of the form 'projects/{project}/global/networks/{network}'.
Where {project} is a project number, as in '12345', and {network} is a
network name.

To specify this field, you must have already [configured VPC Network
Peering for Vertex
AI](https://cloud.google.com/vertex-ai/docs/general/vpc-peering).

If this field is left unspecified, the resources aren't peered with any
network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#network GoogleVertexAiPersistentResource#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#project GoogleVertexAiPersistentResource#project}.

---

##### `psc_interface_config`<sup>Optional</sup> <a name="psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.pscInterfaceConfig"></a>

```python
psc_interface_config: GoogleVertexAiPersistentResourcePscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#psc_interface_config GoogleVertexAiPersistentResource#psc_interface_config}

---

##### `reserved_ip_ranges`<sup>Optional</sup> <a name="reserved_ip_ranges" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.reservedIpRanges"></a>

```python
reserved_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

A list of names for the reserved IP ranges under the VPC network that can be used for this persistent resource.

If set, we will deploy the persistent resource within the provided IP
ranges. Otherwise, the persistent resource is deployed to any IP
ranges under the provided VPC network.

Example: ['vertex-ai-ip-range'].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#reserved_ip_ranges GoogleVertexAiPersistentResource#reserved_ip_ranges}

---

##### `resource_runtime_spec`<sup>Optional</sup> <a name="resource_runtime_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.resourceRuntimeSpec"></a>

```python
resource_runtime_spec: GoogleVertexAiPersistentResourceResourceRuntimeSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a>

resource_runtime_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#resource_runtime_spec GoogleVertexAiPersistentResource#resource_runtime_spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiPersistentResourceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#timeouts GoogleVertexAiPersistentResource#timeouts}

---

### GoogleVertexAiPersistentResourceEncryptionSpec <a name="GoogleVertexAiPersistentResourceEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have
the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#kms_key_name GoogleVertexAiPersistentResource#kms_key_name}

---

### GoogleVertexAiPersistentResourceError <a name="GoogleVertexAiPersistentResourceError" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceError()
```


### GoogleVertexAiPersistentResourcePscInterfaceConfig <a name="GoogleVertexAiPersistentResourcePscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig(
  dns_peering_configs: IResolvable | typing.List[GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs] = None,
  network_attachment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig.property.dnsPeeringConfigs">dns_peering_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a>]</code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig.property.networkAttachment">network_attachment</a></code> | <code>str</code> | The name of the Compute Engine [network attachment](https://cloud.google.com/vpc/docs/about-network-attachments) to attach to the resource within the region and user project. To specify this field, you must have already [created a network attachment] (https://cloud.google.com/vpc/docs/create-manage-network-attachments#create-network-attachments). This field is only used for resources using PSC-I. |

---

##### `dns_peering_configs`<sup>Optional</sup> <a name="dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig.property.dnsPeeringConfigs"></a>

```python
dns_peering_configs: IResolvable | typing.List[GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a>]

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#dns_peering_configs GoogleVertexAiPersistentResource#dns_peering_configs}

---

##### `network_attachment`<sup>Optional</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

The name of the Compute Engine [network attachment](https://cloud.google.com/vpc/docs/about-network-attachments) to attach to the resource within the region and user project. To specify this field, you must have already [created a network attachment] (https://cloud.google.com/vpc/docs/create-manage-network-attachments#create-network-attachments). This field is only used for resources using PSC-I.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#network_attachment GoogleVertexAiPersistentResource#network_attachment}

---

### GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs <a name="GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs(
  domain: str,
  target_network: str,
  target_project: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.domain">domain</a></code> | <code>str</code> | The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">target_network</a></code> | <code>str</code> | The VPC network name in the target_project where the DNS zone specified by 'domain' is visible. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.targetProject">target_project</a></code> | <code>str</code> | The project ID hosting the Cloud DNS managed zone that contains the 'domain'. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```python
domain: str
```

- *Type:* str

The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#domain GoogleVertexAiPersistentResource#domain}

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```python
target_network: str
```

- *Type:* str

The VPC network name in the target_project where the DNS zone specified by 'domain' is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#target_network GoogleVertexAiPersistentResource#target_network}

---

##### `target_project`<sup>Required</sup> <a name="target_project" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```python
target_project: str
```

- *Type:* str

The project ID hosting the Cloud DNS managed zone that contains the 'domain'.

The Vertex AI Service Agent requires the
dns.peer role on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#target_project GoogleVertexAiPersistentResource#target_project}

---

### GoogleVertexAiPersistentResourceResourcePools <a name="GoogleVertexAiPersistentResourceResourcePools" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools(
  machine_spec: GoogleVertexAiPersistentResourceResourcePoolsMachineSpec,
  autoscaling_spec: GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec = None,
  disk_spec: GoogleVertexAiPersistentResourceResourcePoolsDiskSpec = None,
  id: str = None,
  replica_count: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.machineSpec">machine_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.autoscalingSpec">autoscaling_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a></code> | autoscaling_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.diskSpec">disk_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a></code> | disk_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.id">id</a></code> | <code>str</code> | The unique ID in a PersistentResource for referring to this resource pool. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.replicaCount">replica_count</a></code> | <code>str</code> | The total number of machines to use for this resource pool. |

---

##### `machine_spec`<sup>Required</sup> <a name="machine_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.machineSpec"></a>

```python
machine_spec: GoogleVertexAiPersistentResourceResourcePoolsMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#machine_spec GoogleVertexAiPersistentResource#machine_spec}

---

##### `autoscaling_spec`<sup>Optional</sup> <a name="autoscaling_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.autoscalingSpec"></a>

```python
autoscaling_spec: GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a>

autoscaling_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#autoscaling_spec GoogleVertexAiPersistentResource#autoscaling_spec}

---

##### `disk_spec`<sup>Optional</sup> <a name="disk_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.diskSpec"></a>

```python
disk_spec: GoogleVertexAiPersistentResourceResourcePoolsDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a>

disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#disk_spec GoogleVertexAiPersistentResource#disk_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.id"></a>

```python
id: str
```

- *Type:* str

The unique ID in a PersistentResource for referring to this resource pool.

User can specify it if necessary. Otherwise, it's generated
automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#id GoogleVertexAiPersistentResource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replica_count`<sup>Optional</sup> <a name="replica_count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.replicaCount"></a>

```python
replica_count: str
```

- *Type:* str

The total number of machines to use for this resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#replica_count GoogleVertexAiPersistentResource#replica_count}

---

### GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec <a name="GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec(
  max_replica_count: str = None,
  min_replica_count: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec.property.maxReplicaCount">max_replica_count</a></code> | <code>str</code> | max replicas in the node pool, must be ≥ replica_count and > min_replica_count or will throw error. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec.property.minReplicaCount">min_replica_count</a></code> | <code>str</code> | min replicas in the node pool, must be ≤ replica_count and < max_replica_count or will throw error. |

---

##### `max_replica_count`<sup>Optional</sup> <a name="max_replica_count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec.property.maxReplicaCount"></a>

```python
max_replica_count: str
```

- *Type:* str

max replicas in the node pool, must be ≥ replica_count and > min_replica_count or will throw error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#max_replica_count GoogleVertexAiPersistentResource#max_replica_count}

---

##### `min_replica_count`<sup>Optional</sup> <a name="min_replica_count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec.property.minReplicaCount"></a>

```python
min_replica_count: str
```

- *Type:* str

min replicas in the node pool, must be ≤ replica_count and < max_replica_count or will throw error.

For autoscaling enabled Ray-on-Vertex, we allow min_replica_count of a
resource_pool to be 0 to match the OSS Ray
behavior(https://docs.ray.io/en/latest/cluster/vms/user-guides/configuring-autoscaling.html#cluster-config-parameters).
As for Persistent Resource, the min_replica_count must be > 0, we added
a corresponding validation inside
CreatePersistentResourceRequestValidator.java.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#min_replica_count GoogleVertexAiPersistentResource#min_replica_count}

---

### GoogleVertexAiPersistentResourceResourcePoolsDiskSpec <a name="GoogleVertexAiPersistentResourceResourcePoolsDiskSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec(
  boot_disk_size_gb: typing.Union[int, float] = None,
  boot_disk_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Size in GB of the boot disk (default is 100GB). |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec.property.bootDiskType">boot_disk_type</a></code> | <code>str</code> | Type of the boot disk. |

---

##### `boot_disk_size_gb`<sup>Optional</sup> <a name="boot_disk_size_gb" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size in GB of the boot disk (default is 100GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#boot_disk_size_gb GoogleVertexAiPersistentResource#boot_disk_size_gb}

---

##### `boot_disk_type`<sup>Optional</sup> <a name="boot_disk_type" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec.property.bootDiskType"></a>

```python
boot_disk_type: str
```

- *Type:* str

Type of the boot disk.

For non-A3U machines, the default value is
"pd-ssd", for A3U machines, the default value is "hyperdisk-balanced".
Valid values: "pd-ssd" (Persistent Disk Solid State Drive),
"pd-standard" (Persistent Disk Hard Disk Drive) or "hyperdisk-balanced".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#boot_disk_type GoogleVertexAiPersistentResource#boot_disk_type}

---

### GoogleVertexAiPersistentResourceResourcePoolsMachineSpec <a name="GoogleVertexAiPersistentResourceResourcePoolsMachineSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec(
  accelerator_count: typing.Union[int, float] = None,
  accelerator_type: str = None,
  machine_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.acceleratorCount">accelerator_count</a></code> | <code>typing.Union[int, float]</code> | The number of accelerators to attach to the machine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | The type of accelerator(s) that may be attached to the machine. Possible values: NVIDIA_TESLA_K80 NVIDIA_TESLA_P100 NVIDIA_TESLA_V100 NVIDIA_TESLA_P4 NVIDIA_TESLA_T4 NVIDIA_TESLA_A100 NVIDIA_A100_80GB NVIDIA_L4 NVIDIA_H100_80GB NVIDIA_H100_MEGA_80GB NVIDIA_H200_141GB NVIDIA_B200 NVIDIA_GB200 NVIDIA_RTX_PRO_6000 TPU_V2 TPU_V3 TPU_V4_POD TPU_V5_LITEPOD. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.machineType">machine_type</a></code> | <code>str</code> | The type of the machine. |

---

##### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.acceleratorCount"></a>

```python
accelerator_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#accelerator_count GoogleVertexAiPersistentResource#accelerator_count}

---

##### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

The type of accelerator(s) that may be attached to the machine. Possible values: NVIDIA_TESLA_K80 NVIDIA_TESLA_P100 NVIDIA_TESLA_V100 NVIDIA_TESLA_P4 NVIDIA_TESLA_T4 NVIDIA_TESLA_A100 NVIDIA_A100_80GB NVIDIA_L4 NVIDIA_H100_80GB NVIDIA_H100_MEGA_80GB NVIDIA_H200_141GB NVIDIA_B200 NVIDIA_GB200 NVIDIA_RTX_PRO_6000 TPU_V2 TPU_V3 TPU_V4_POD TPU_V5_LITEPOD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#accelerator_type GoogleVertexAiPersistentResource#accelerator_type}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The type of the machine.

See the [list of machine types supported for
prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)

See the [list of machine types supported for custom
training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#machine_type GoogleVertexAiPersistentResource#machine_type}

---

### GoogleVertexAiPersistentResourceResourceRuntime <a name="GoogleVertexAiPersistentResourceResourceRuntime" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntime.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntime()
```


### GoogleVertexAiPersistentResourceResourceRuntimeSpec <a name="GoogleVertexAiPersistentResourceResourceRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec(
  service_account_spec: GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec.property.serviceAccountSpec">service_account_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a></code> | service_account_spec block. |

---

##### `service_account_spec`<sup>Optional</sup> <a name="service_account_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec.property.serviceAccountSpec"></a>

```python
service_account_spec: GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a>

service_account_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#service_account_spec GoogleVertexAiPersistentResource#service_account_spec}

---

### GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec <a name="GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec(
  enable_custom_service_account: bool | IResolvable
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec.property.enableCustomServiceAccount">enable_custom_service_account</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, custom user-managed service account is enforced to run any workloads (for example, Vertex Jobs) on the resource. |

---

##### `enable_custom_service_account`<sup>Required</sup> <a name="enable_custom_service_account" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec.property.enableCustomServiceAccount"></a>

```python
enable_custom_service_account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, custom user-managed service account is enforced to run any workloads (for example, Vertex Jobs) on the resource.

Otherwise, uses the [Vertex AI Custom Code Service
Agent](https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#enable_custom_service_account GoogleVertexAiPersistentResource#enable_custom_service_account}

---

### GoogleVertexAiPersistentResourceTimeouts <a name="GoogleVertexAiPersistentResourceTimeouts" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#create GoogleVertexAiPersistentResource#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#delete GoogleVertexAiPersistentResource#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#update GoogleVertexAiPersistentResource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#create GoogleVertexAiPersistentResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#delete GoogleVertexAiPersistentResource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#update GoogleVertexAiPersistentResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiPersistentResourceEncryptionSpecOutputReference <a name="GoogleVertexAiPersistentResourceEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPersistentResourceEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a>

---


### GoogleVertexAiPersistentResourceErrorList <a name="GoogleVertexAiPersistentResourceErrorList" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiPersistentResourceErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiPersistentResourceErrorOutputReference <a name="GoogleVertexAiPersistentResourceErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceError">GoogleVertexAiPersistentResourceError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPersistentResourceError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceError">GoogleVertexAiPersistentResourceError</a>

---


### GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList <a name="GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a>]

---


### GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference <a name="GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">target_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">target_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">target_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">target_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `target_network_input`<sup>Optional</sup> <a name="target_network_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```python
target_network_input: str
```

- *Type:* str

---

##### `target_project_input`<sup>Optional</sup> <a name="target_project_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```python
target_project_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```python
target_network: str
```

- *Type:* str

---

##### `target_project`<sup>Required</sup> <a name="target_project" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```python
target_project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a>

---


### GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference <a name="GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.putDnsPeeringConfigs">put_dns_peering_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resetDnsPeeringConfigs">reset_dns_peering_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resetNetworkAttachment">reset_network_attachment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns_peering_configs` <a name="put_dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```python
def put_dns_peering_configs(
  value: IResolvable | typing.List[GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a>]

---

##### `reset_dns_peering_configs` <a name="reset_dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```python
def reset_dns_peering_configs() -> None
```

##### `reset_network_attachment` <a name="reset_network_attachment" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```python
def reset_network_attachment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.dnsPeeringConfigs">dns_peering_configs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">dns_peering_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.networkAttachmentInput">network_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_peering_configs`<sup>Required</sup> <a name="dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```python
dns_peering_configs: GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `dns_peering_configs_input`<sup>Optional</sup> <a name="dns_peering_configs_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```python
dns_peering_configs_input: IResolvable | typing.List[GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a>]

---

##### `network_attachment_input`<sup>Optional</sup> <a name="network_attachment_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```python
network_attachment_input: str
```

- *Type:* str

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPersistentResourcePscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a>

---


### GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference <a name="GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resetMaxReplicaCount">reset_max_replica_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resetMinReplicaCount">reset_min_replica_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_replica_count` <a name="reset_max_replica_count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resetMaxReplicaCount"></a>

```python
def reset_max_replica_count() -> None
```

##### `reset_min_replica_count` <a name="reset_min_replica_count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resetMinReplicaCount"></a>

```python
def reset_min_replica_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.maxReplicaCountInput">max_replica_count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.minReplicaCountInput">min_replica_count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.maxReplicaCount">max_replica_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.minReplicaCount">min_replica_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_replica_count_input`<sup>Optional</sup> <a name="max_replica_count_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.maxReplicaCountInput"></a>

```python
max_replica_count_input: str
```

- *Type:* str

---

##### `min_replica_count_input`<sup>Optional</sup> <a name="min_replica_count_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.minReplicaCountInput"></a>

```python
min_replica_count_input: str
```

- *Type:* str

---

##### `max_replica_count`<sup>Required</sup> <a name="max_replica_count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.maxReplicaCount"></a>

```python
max_replica_count: str
```

- *Type:* str

---

##### `min_replica_count`<sup>Required</sup> <a name="min_replica_count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.minReplicaCount"></a>

```python
min_replica_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a>

---


### GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference <a name="GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resetBootDiskSizeGb">reset_boot_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resetBootDiskType">reset_boot_disk_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_boot_disk_size_gb` <a name="reset_boot_disk_size_gb" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resetBootDiskSizeGb"></a>

```python
def reset_boot_disk_size_gb() -> None
```

##### `reset_boot_disk_type` <a name="reset_boot_disk_type" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resetBootDiskType"></a>

```python
def reset_boot_disk_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskSizeGbInput">boot_disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskTypeInput">boot_disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskType">boot_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boot_disk_size_gb_input`<sup>Optional</sup> <a name="boot_disk_size_gb_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskSizeGbInput"></a>

```python
boot_disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_disk_type_input`<sup>Optional</sup> <a name="boot_disk_type_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskTypeInput"></a>

```python
boot_disk_type_input: str
```

- *Type:* str

---

##### `boot_disk_size_gb`<sup>Required</sup> <a name="boot_disk_size_gb" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_disk_type`<sup>Required</sup> <a name="boot_disk_type" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskType"></a>

```python
boot_disk_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPersistentResourceResourcePoolsDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a>

---


### GoogleVertexAiPersistentResourceResourcePoolsList <a name="GoogleVertexAiPersistentResourceResourcePoolsList" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiPersistentResourceResourcePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiPersistentResourceResourcePools]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>]

---


### GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference <a name="GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetAcceleratorCount">reset_accelerator_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetAcceleratorType">reset_accelerator_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accelerator_count` <a name="reset_accelerator_count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetAcceleratorCount"></a>

```python
def reset_accelerator_count() -> None
```

##### `reset_accelerator_type` <a name="reset_accelerator_type" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetAcceleratorType"></a>

```python
def reset_accelerator_type() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorCountInput">accelerator_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorTypeInput">accelerator_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorCount">accelerator_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_count_input`<sup>Optional</sup> <a name="accelerator_count_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorCountInput"></a>

```python
accelerator_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerator_type_input`<sup>Optional</sup> <a name="accelerator_type_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```python
accelerator_type_input: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `accelerator_count`<sup>Required</sup> <a name="accelerator_count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorCount"></a>

```python
accelerator_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPersistentResourceResourcePoolsMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a>

---


### GoogleVertexAiPersistentResourceResourcePoolsOutputReference <a name="GoogleVertexAiPersistentResourceResourcePoolsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putAutoscalingSpec">put_autoscaling_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putDiskSpec">put_disk_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putMachineSpec">put_machine_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetAutoscalingSpec">reset_autoscaling_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetDiskSpec">reset_disk_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetReplicaCount">reset_replica_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscaling_spec` <a name="put_autoscaling_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putAutoscalingSpec"></a>

```python
def put_autoscaling_spec(
  max_replica_count: str = None,
  min_replica_count: str = None
) -> None
```

###### `max_replica_count`<sup>Optional</sup> <a name="max_replica_count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putAutoscalingSpec.parameter.maxReplicaCount"></a>

- *Type:* str

max replicas in the node pool, must be ≥ replica_count and > min_replica_count or will throw error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#max_replica_count GoogleVertexAiPersistentResource#max_replica_count}

---

###### `min_replica_count`<sup>Optional</sup> <a name="min_replica_count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putAutoscalingSpec.parameter.minReplicaCount"></a>

- *Type:* str

min replicas in the node pool, must be ≤ replica_count and < max_replica_count or will throw error.

For autoscaling enabled Ray-on-Vertex, we allow min_replica_count of a
resource_pool to be 0 to match the OSS Ray
behavior(https://docs.ray.io/en/latest/cluster/vms/user-guides/configuring-autoscaling.html#cluster-config-parameters).
As for Persistent Resource, the min_replica_count must be > 0, we added
a corresponding validation inside
CreatePersistentResourceRequestValidator.java.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#min_replica_count GoogleVertexAiPersistentResource#min_replica_count}

---

##### `put_disk_spec` <a name="put_disk_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putDiskSpec"></a>

```python
def put_disk_spec(
  boot_disk_size_gb: typing.Union[int, float] = None,
  boot_disk_type: str = None
) -> None
```

###### `boot_disk_size_gb`<sup>Optional</sup> <a name="boot_disk_size_gb" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putDiskSpec.parameter.bootDiskSizeGb"></a>

- *Type:* typing.Union[int, float]

Size in GB of the boot disk (default is 100GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#boot_disk_size_gb GoogleVertexAiPersistentResource#boot_disk_size_gb}

---

###### `boot_disk_type`<sup>Optional</sup> <a name="boot_disk_type" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putDiskSpec.parameter.bootDiskType"></a>

- *Type:* str

Type of the boot disk.

For non-A3U machines, the default value is
"pd-ssd", for A3U machines, the default value is "hyperdisk-balanced".
Valid values: "pd-ssd" (Persistent Disk Solid State Drive),
"pd-standard" (Persistent Disk Hard Disk Drive) or "hyperdisk-balanced".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#boot_disk_type GoogleVertexAiPersistentResource#boot_disk_type}

---

##### `put_machine_spec` <a name="put_machine_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putMachineSpec"></a>

```python
def put_machine_spec(
  accelerator_count: typing.Union[int, float] = None,
  accelerator_type: str = None,
  machine_type: str = None
) -> None
```

###### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putMachineSpec.parameter.acceleratorCount"></a>

- *Type:* typing.Union[int, float]

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#accelerator_count GoogleVertexAiPersistentResource#accelerator_count}

---

###### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putMachineSpec.parameter.acceleratorType"></a>

- *Type:* str

The type of accelerator(s) that may be attached to the machine. Possible values: NVIDIA_TESLA_K80 NVIDIA_TESLA_P100 NVIDIA_TESLA_V100 NVIDIA_TESLA_P4 NVIDIA_TESLA_T4 NVIDIA_TESLA_A100 NVIDIA_A100_80GB NVIDIA_L4 NVIDIA_H100_80GB NVIDIA_H100_MEGA_80GB NVIDIA_H200_141GB NVIDIA_B200 NVIDIA_GB200 NVIDIA_RTX_PRO_6000 TPU_V2 TPU_V3 TPU_V4_POD TPU_V5_LITEPOD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#accelerator_type GoogleVertexAiPersistentResource#accelerator_type}

---

###### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putMachineSpec.parameter.machineType"></a>

- *Type:* str

The type of the machine.

See the [list of machine types supported for
prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)

See the [list of machine types supported for custom
training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#machine_type GoogleVertexAiPersistentResource#machine_type}

---

##### `reset_autoscaling_spec` <a name="reset_autoscaling_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetAutoscalingSpec"></a>

```python
def reset_autoscaling_spec() -> None
```

##### `reset_disk_spec` <a name="reset_disk_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetDiskSpec"></a>

```python
def reset_disk_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_replica_count` <a name="reset_replica_count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetReplicaCount"></a>

```python
def reset_replica_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.autoscalingSpec">autoscaling_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.diskSpec">disk_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.machineSpec">machine_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.usedReplicaCount">used_replica_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.autoscalingSpecInput">autoscaling_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.diskSpecInput">disk_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.machineSpecInput">machine_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.replicaCountInput">replica_count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.replicaCount">replica_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscaling_spec`<sup>Required</sup> <a name="autoscaling_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.autoscalingSpec"></a>

```python
autoscaling_spec: GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference</a>

---

##### `disk_spec`<sup>Required</sup> <a name="disk_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.diskSpec"></a>

```python
disk_spec: GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference</a>

---

##### `machine_spec`<sup>Required</sup> <a name="machine_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.machineSpec"></a>

```python
machine_spec: GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference</a>

---

##### `used_replica_count`<sup>Required</sup> <a name="used_replica_count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.usedReplicaCount"></a>

```python
used_replica_count: str
```

- *Type:* str

---

##### `autoscaling_spec_input`<sup>Optional</sup> <a name="autoscaling_spec_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.autoscalingSpecInput"></a>

```python
autoscaling_spec_input: GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a>

---

##### `disk_spec_input`<sup>Optional</sup> <a name="disk_spec_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.diskSpecInput"></a>

```python
disk_spec_input: GoogleVertexAiPersistentResourceResourcePoolsDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `machine_spec_input`<sup>Optional</sup> <a name="machine_spec_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.machineSpecInput"></a>

```python
machine_spec_input: GoogleVertexAiPersistentResourceResourcePoolsMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a>

---

##### `replica_count_input`<sup>Optional</sup> <a name="replica_count_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.replicaCountInput"></a>

```python
replica_count_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `replica_count`<sup>Required</sup> <a name="replica_count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.replicaCount"></a>

```python
replica_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiPersistentResourceResourcePools
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>

---


### GoogleVertexAiPersistentResourceResourceRuntimeList <a name="GoogleVertexAiPersistentResourceResourceRuntimeList" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiPersistentResourceResourceRuntimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiPersistentResourceResourceRuntimeOutputReference <a name="GoogleVertexAiPersistentResourceResourceRuntimeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.accessUris">access_uris</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntime">GoogleVertexAiPersistentResourceResourceRuntime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_uris`<sup>Required</sup> <a name="access_uris" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.accessUris"></a>

```python
access_uris: StringMap
```

- *Type:* cdktn.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPersistentResourceResourceRuntime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntime">GoogleVertexAiPersistentResourceResourceRuntime</a>

---


### GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference <a name="GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.putServiceAccountSpec">put_service_account_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.resetServiceAccountSpec">reset_service_account_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_service_account_spec` <a name="put_service_account_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.putServiceAccountSpec"></a>

```python
def put_service_account_spec(
  enable_custom_service_account: bool | IResolvable
) -> None
```

###### `enable_custom_service_account`<sup>Required</sup> <a name="enable_custom_service_account" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.putServiceAccountSpec.parameter.enableCustomServiceAccount"></a>

- *Type:* bool | cdktn.IResolvable

If true, custom user-managed service account is enforced to run any workloads (for example, Vertex Jobs) on the resource.

Otherwise, uses the [Vertex AI Custom Code Service
Agent](https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_persistent_resource#enable_custom_service_account GoogleVertexAiPersistentResource#enable_custom_service_account}

---

##### `reset_service_account_spec` <a name="reset_service_account_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.resetServiceAccountSpec"></a>

```python
def reset_service_account_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.serviceAccountSpec">service_account_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.serviceAccountSpecInput">service_account_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_account_spec`<sup>Required</sup> <a name="service_account_spec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.serviceAccountSpec"></a>

```python
service_account_spec: GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference</a>

---

##### `service_account_spec_input`<sup>Optional</sup> <a name="service_account_spec_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.serviceAccountSpecInput"></a>

```python
service_account_spec_input: GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPersistentResourceResourceRuntimeSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a>

---


### GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference <a name="GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.enableCustomServiceAccountInput">enable_custom_service_account_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.enableCustomServiceAccount">enable_custom_service_account</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_custom_service_account_input`<sup>Optional</sup> <a name="enable_custom_service_account_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.enableCustomServiceAccountInput"></a>

```python
enable_custom_service_account_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_custom_service_account`<sup>Required</sup> <a name="enable_custom_service_account" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.enableCustomServiceAccount"></a>

```python
enable_custom_service_account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a>

---


### GoogleVertexAiPersistentResourceTimeoutsOutputReference <a name="GoogleVertexAiPersistentResourceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_persistent_resource

googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiPersistentResourceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a>

---



