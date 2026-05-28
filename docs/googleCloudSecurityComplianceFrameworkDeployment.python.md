# `googleCloudSecurityComplianceFrameworkDeployment` Submodule <a name="`googleCloudSecurityComplianceFrameworkDeployment` Submodule" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudSecurityComplianceFrameworkDeployment <a name="GoogleCloudSecurityComplianceFrameworkDeployment" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment google_cloud_security_compliance_framework_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cloud_control_metadata: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata],
  framework: GoogleCloudSecurityComplianceFrameworkDeploymentFramework,
  framework_deployment_id: str,
  location: str,
  organization: str,
  target_resource_config: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  timeouts: GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.cloudControlMetadata">cloud_control_metadata</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>]</code> | cloud_control_metadata block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.framework">framework</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a></code> | framework block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.frameworkDeploymentId">framework_deployment_id</a></code> | <code>str</code> | User provided identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.targetResourceConfig">target_resource_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a></code> | target_resource_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.description">description</a></code> | <code>str</code> | User provided description of the Framework deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#id GoogleCloudSecurityComplianceFrameworkDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud_control_metadata`<sup>Required</sup> <a name="cloud_control_metadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.cloudControlMetadata"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>]

cloud_control_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#cloud_control_metadata GoogleCloudSecurityComplianceFrameworkDeployment#cloud_control_metadata}

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.framework"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a>

framework block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#framework GoogleCloudSecurityComplianceFrameworkDeployment#framework}

---

##### `framework_deployment_id`<sup>Required</sup> <a name="framework_deployment_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.frameworkDeploymentId"></a>

- *Type:* str

User provided identifier.

It should be unique in scope of a parent.
This is optional and if not provided, a random UUID will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#framework_deployment_id GoogleCloudSecurityComplianceFrameworkDeployment#framework_deployment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#location GoogleCloudSecurityComplianceFrameworkDeployment#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.organization"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#organization GoogleCloudSecurityComplianceFrameworkDeployment#organization}

---

##### `target_resource_config`<sup>Required</sup> <a name="target_resource_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.targetResourceConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a>

target_resource_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#target_resource_config GoogleCloudSecurityComplianceFrameworkDeployment#target_resource_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#deletion_policy GoogleCloudSecurityComplianceFrameworkDeployment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.description"></a>

- *Type:* str

User provided description of the Framework deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#description GoogleCloudSecurityComplianceFrameworkDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#id GoogleCloudSecurityComplianceFrameworkDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#timeouts GoogleCloudSecurityComplianceFrameworkDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putCloudControlMetadata">put_cloud_control_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putFramework">put_framework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTargetResourceConfig">put_target_resource_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloud_control_metadata` <a name="put_cloud_control_metadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putCloudControlMetadata"></a>

```python
def put_cloud_control_metadata(
  value: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putCloudControlMetadata.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>]

---

##### `put_framework` <a name="put_framework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putFramework"></a>

```python
def put_framework(
  framework: str,
  major_revision_id: str
) -> None
```

###### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putFramework.parameter.framework"></a>

- *Type:* str

In the format: organizations/{org}/locations/{location}/frameworks/{framework}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#framework GoogleCloudSecurityComplianceFrameworkDeployment#framework}

---

###### `major_revision_id`<sup>Required</sup> <a name="major_revision_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putFramework.parameter.majorRevisionId"></a>

- *Type:* str

Major revision id of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#major_revision_id GoogleCloudSecurityComplianceFrameworkDeployment#major_revision_id}

---

##### `put_target_resource_config` <a name="put_target_resource_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTargetResourceConfig"></a>

```python
def put_target_resource_config(
  existing_target_resource: str = None,
  target_resource_creation_config: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig = None
) -> None
```

###### `existing_target_resource`<sup>Optional</sup> <a name="existing_target_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTargetResourceConfig.parameter.existingTargetResource"></a>

- *Type:* str

CRM node in format organizations/{organization}, folders/{folder}, or projects/{project}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#existing_target_resource GoogleCloudSecurityComplianceFrameworkDeployment#existing_target_resource}

---

###### `target_resource_creation_config`<sup>Optional</sup> <a name="target_resource_creation_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTargetResourceConfig.parameter.targetResourceCreationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a>

target_resource_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#target_resource_creation_config GoogleCloudSecurityComplianceFrameworkDeployment#target_resource_creation_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#create GoogleCloudSecurityComplianceFrameworkDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#delete GoogleCloudSecurityComplianceFrameworkDeployment#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleCloudSecurityComplianceFrameworkDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleCloudSecurityComplianceFrameworkDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCloudSecurityComplianceFrameworkDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCloudSecurityComplianceFrameworkDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudSecurityComplianceFrameworkDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlDeploymentReferences">cloud_control_deployment_references</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlMetadata">cloud_control_metadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.computedTargetResource">computed_target_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deploymentState">deployment_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.framework">framework</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceConfig">target_resource_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceDisplayName">target_resource_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlMetadataInput">cloud_control_metadata_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkDeploymentIdInput">framework_deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkInput">framework_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceConfigInput">target_resource_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkDeploymentId">framework_deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.organization">organization</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud_control_deployment_references`<sup>Required</sup> <a name="cloud_control_deployment_references" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlDeploymentReferences"></a>

```python
cloud_control_deployment_references: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList</a>

---

##### `cloud_control_metadata`<sup>Required</sup> <a name="cloud_control_metadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlMetadata"></a>

```python
cloud_control_metadata: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList</a>

---

##### `computed_target_resource`<sup>Required</sup> <a name="computed_target_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.computedTargetResource"></a>

```python
computed_target_resource: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deployment_state`<sup>Required</sup> <a name="deployment_state" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deploymentState"></a>

```python
deployment_state: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.framework"></a>

```python
framework: GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target_resource_config`<sup>Required</sup> <a name="target_resource_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceConfig"></a>

```python
target_resource_config: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference</a>

---

##### `target_resource_display_name`<sup>Required</sup> <a name="target_resource_display_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceDisplayName"></a>

```python
target_resource_display_name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.timeouts"></a>

```python
timeouts: GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `cloud_control_metadata_input`<sup>Optional</sup> <a name="cloud_control_metadata_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlMetadataInput"></a>

```python
cloud_control_metadata_input: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `framework_deployment_id_input`<sup>Optional</sup> <a name="framework_deployment_id_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkDeploymentIdInput"></a>

```python
framework_deployment_id_input: str
```

- *Type:* str

---

##### `framework_input`<sup>Optional</sup> <a name="framework_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkInput"></a>

```python
framework_input: GoogleCloudSecurityComplianceFrameworkDeploymentFramework
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `target_resource_config_input`<sup>Optional</sup> <a name="target_resource_config_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceConfigInput"></a>

```python
target_resource_config_input: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `framework_deployment_id`<sup>Required</sup> <a name="framework_deployment_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkDeploymentId"></a>

```python
framework_deployment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences()
```


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata(
  cloud_control_details: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails,
  enforcement_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.property.cloudControlDetails">cloud_control_details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a></code> | cloud_control_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | Enforcement mode for the framework deployment. Possible values: PREVENTIVE DETECTIVE AUDIT. |

---

##### `cloud_control_details`<sup>Required</sup> <a name="cloud_control_details" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.property.cloudControlDetails"></a>

```python
cloud_control_details: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a>

cloud_control_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#cloud_control_details GoogleCloudSecurityComplianceFrameworkDeployment#cloud_control_details}

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

Enforcement mode for the framework deployment. Possible values: PREVENTIVE DETECTIVE AUDIT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#enforcement_mode GoogleCloudSecurityComplianceFrameworkDeployment#enforcement_mode}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails(
  major_revision_id: str,
  name: str,
  parameters: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.majorRevisionId">major_revision_id</a></code> | <code>str</code> | Major revision of cloudcontrol. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.name">name</a></code> | <code>str</code> | The name of the CloudControl in the format: “organizations/{organization}/locations/{location}/ cloudControls/{cloud-control}”. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a>]</code> | parameters block. |

---

##### `major_revision_id`<sup>Required</sup> <a name="major_revision_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.majorRevisionId"></a>

```python
major_revision_id: str
```

- *Type:* str

Major revision of cloudcontrol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#major_revision_id GoogleCloudSecurityComplianceFrameworkDeployment#major_revision_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the CloudControl in the format: “organizations/{organization}/locations/{location}/ cloudControls/{cloud-control}”.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#name GoogleCloudSecurityComplianceFrameworkDeployment#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.parameters"></a>

```python
parameters: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a>]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#parameters GoogleCloudSecurityComplianceFrameworkDeployment#parameters}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters(
  name: str,
  parameter_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.property.name">name</a></code> | <code>str</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.property.parameterValue">parameter_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a></code> | parameter_value block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#name GoogleCloudSecurityComplianceFrameworkDeployment#name}

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.property.parameterValue"></a>

```python
parameter_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#parameter_value GoogleCloudSecurityComplianceFrameworkDeployment#parameter_value}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue(
  bool_value: bool | IResolvable = None,
  number_value: typing.Union[int, float] = None,
  oneof_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue = None,
  string_list_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.oneofValue">oneof_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a></code> | oneof_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.stringListValue">string_list_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.stringValue">string_value</a></code> | <code>str</code> | Represents a string value. |

---

##### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#bool_value GoogleCloudSecurityComplianceFrameworkDeployment#bool_value}

---

##### `number_value`<sup>Optional</sup> <a name="number_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#number_value GoogleCloudSecurityComplianceFrameworkDeployment#number_value}

---

##### `oneof_value`<sup>Optional</sup> <a name="oneof_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.oneofValue"></a>

```python
oneof_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a>

oneof_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#oneof_value GoogleCloudSecurityComplianceFrameworkDeployment#oneof_value}

---

##### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.stringListValue"></a>

```python
string_list_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_list_value GoogleCloudSecurityComplianceFrameworkDeployment#string_list_value}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_value GoogleCloudSecurityComplianceFrameworkDeployment#string_value}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue(
  name: str = None,
  parameter_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.property.name">name</a></code> | <code>str</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue">parameter_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | parameter_value block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#name GoogleCloudSecurityComplianceFrameworkDeployment#name}

---

##### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue"></a>

```python
parameter_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#parameter_value GoogleCloudSecurityComplianceFrameworkDeployment#parameter_value}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue(
  bool_value: bool | IResolvable = None,
  number_value: typing.Union[int, float] = None,
  string_list_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue">string_list_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue">string_value</a></code> | <code>str</code> | Represents a string value. |

---

##### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#bool_value GoogleCloudSecurityComplianceFrameworkDeployment#bool_value}

---

##### `number_value`<sup>Optional</sup> <a name="number_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#number_value GoogleCloudSecurityComplianceFrameworkDeployment#number_value}

---

##### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue"></a>

```python
string_list_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_list_value GoogleCloudSecurityComplianceFrameworkDeployment#string_list_value}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_value GoogleCloudSecurityComplianceFrameworkDeployment#string_value}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue(
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values">values</a></code> | <code>typing.List[str]</code> | The strings in the list. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#values GoogleCloudSecurityComplianceFrameworkDeployment#values}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue(
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue.property.values">values</a></code> | <code>typing.List[str]</code> | The strings in the list. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#values GoogleCloudSecurityComplianceFrameworkDeployment#values}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentConfig <a name="GoogleCloudSecurityComplianceFrameworkDeploymentConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cloud_control_metadata: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata],
  framework: GoogleCloudSecurityComplianceFrameworkDeploymentFramework,
  framework_deployment_id: str,
  location: str,
  organization: str,
  target_resource_config: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  timeouts: GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.cloudControlMetadata">cloud_control_metadata</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>]</code> | cloud_control_metadata block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.framework">framework</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a></code> | framework block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.frameworkDeploymentId">framework_deployment_id</a></code> | <code>str</code> | User provided identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.organization">organization</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.targetResourceConfig">target_resource_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a></code> | target_resource_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.description">description</a></code> | <code>str</code> | User provided description of the Framework deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#id GoogleCloudSecurityComplianceFrameworkDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud_control_metadata`<sup>Required</sup> <a name="cloud_control_metadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.cloudControlMetadata"></a>

```python
cloud_control_metadata: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>]

cloud_control_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#cloud_control_metadata GoogleCloudSecurityComplianceFrameworkDeployment#cloud_control_metadata}

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.framework"></a>

```python
framework: GoogleCloudSecurityComplianceFrameworkDeploymentFramework
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a>

framework block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#framework GoogleCloudSecurityComplianceFrameworkDeployment#framework}

---

##### `framework_deployment_id`<sup>Required</sup> <a name="framework_deployment_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.frameworkDeploymentId"></a>

```python
framework_deployment_id: str
```

- *Type:* str

User provided identifier.

It should be unique in scope of a parent.
This is optional and if not provided, a random UUID will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#framework_deployment_id GoogleCloudSecurityComplianceFrameworkDeployment#framework_deployment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#location GoogleCloudSecurityComplianceFrameworkDeployment#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#organization GoogleCloudSecurityComplianceFrameworkDeployment#organization}

---

##### `target_resource_config`<sup>Required</sup> <a name="target_resource_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.targetResourceConfig"></a>

```python
target_resource_config: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a>

target_resource_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#target_resource_config GoogleCloudSecurityComplianceFrameworkDeployment#target_resource_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#deletion_policy GoogleCloudSecurityComplianceFrameworkDeployment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User provided description of the Framework deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#description GoogleCloudSecurityComplianceFrameworkDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#id GoogleCloudSecurityComplianceFrameworkDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.timeouts"></a>

```python
timeouts: GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#timeouts GoogleCloudSecurityComplianceFrameworkDeployment#timeouts}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentFramework <a name="GoogleCloudSecurityComplianceFrameworkDeploymentFramework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework(
  framework: str,
  major_revision_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework.property.framework">framework</a></code> | <code>str</code> | In the format: organizations/{org}/locations/{location}/frameworks/{framework}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework.property.majorRevisionId">major_revision_id</a></code> | <code>str</code> | Major revision id of the framework. |

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework.property.framework"></a>

```python
framework: str
```

- *Type:* str

In the format: organizations/{org}/locations/{location}/frameworks/{framework}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#framework GoogleCloudSecurityComplianceFrameworkDeployment#framework}

---

##### `major_revision_id`<sup>Required</sup> <a name="major_revision_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework.property.majorRevisionId"></a>

```python
major_revision_id: str
```

- *Type:* str

Major revision id of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#major_revision_id GoogleCloudSecurityComplianceFrameworkDeployment#major_revision_id}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig(
  existing_target_resource: str = None,
  target_resource_creation_config: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.property.existingTargetResource">existing_target_resource</a></code> | <code>str</code> | CRM node in format organizations/{organization}, folders/{folder}, or projects/{project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.property.targetResourceCreationConfig">target_resource_creation_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a></code> | target_resource_creation_config block. |

---

##### `existing_target_resource`<sup>Optional</sup> <a name="existing_target_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.property.existingTargetResource"></a>

```python
existing_target_resource: str
```

- *Type:* str

CRM node in format organizations/{organization}, folders/{folder}, or projects/{project}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#existing_target_resource GoogleCloudSecurityComplianceFrameworkDeployment#existing_target_resource}

---

##### `target_resource_creation_config`<sup>Optional</sup> <a name="target_resource_creation_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.property.targetResourceCreationConfig"></a>

```python
target_resource_creation_config: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a>

target_resource_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#target_resource_creation_config GoogleCloudSecurityComplianceFrameworkDeployment#target_resource_creation_config}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig(
  folder_creation_config: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig = None,
  project_creation_config: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.property.folderCreationConfig">folder_creation_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a></code> | folder_creation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.property.projectCreationConfig">project_creation_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a></code> | project_creation_config block. |

---

##### `folder_creation_config`<sup>Optional</sup> <a name="folder_creation_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.property.folderCreationConfig"></a>

```python
folder_creation_config: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a>

folder_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#folder_creation_config GoogleCloudSecurityComplianceFrameworkDeployment#folder_creation_config}

---

##### `project_creation_config`<sup>Optional</sup> <a name="project_creation_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.property.projectCreationConfig"></a>

```python
project_creation_config: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a>

project_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#project_creation_config GoogleCloudSecurityComplianceFrameworkDeployment#project_creation_config}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig(
  folder_display_name: str,
  parent: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.property.folderDisplayName">folder_display_name</a></code> | <code>str</code> | Display name of the folder to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.property.parent">parent</a></code> | <code>str</code> | The parent of the folder to be created. It can be an organizations/{org} or folders/{folder}. |

---

##### `folder_display_name`<sup>Required</sup> <a name="folder_display_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.property.folderDisplayName"></a>

```python
folder_display_name: str
```

- *Type:* str

Display name of the folder to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#folder_display_name GoogleCloudSecurityComplianceFrameworkDeployment#folder_display_name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent of the folder to be created. It can be an organizations/{org} or folders/{folder}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#parent GoogleCloudSecurityComplianceFrameworkDeployment#parent}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig(
  billing_account_id: str,
  parent: str,
  project_display_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.billingAccountId">billing_account_id</a></code> | <code>str</code> | Billing account id to be used for the project. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.parent">parent</a></code> | <code>str</code> | organizations/{org} or folders/{folder}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.projectDisplayName">project_display_name</a></code> | <code>str</code> | Display name of the project to be created. |

---

##### `billing_account_id`<sup>Required</sup> <a name="billing_account_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.billingAccountId"></a>

```python
billing_account_id: str
```

- *Type:* str

Billing account id to be used for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#billing_account_id GoogleCloudSecurityComplianceFrameworkDeployment#billing_account_id}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

organizations/{org} or folders/{folder}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#parent GoogleCloudSecurityComplianceFrameworkDeployment#parent}

---

##### `project_display_name`<sup>Required</sup> <a name="project_display_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.projectDisplayName"></a>

```python
project_display_name: str
```

- *Type:* str

Display name of the project to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#project_display_name GoogleCloudSecurityComplianceFrameworkDeployment#project_display_name}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#create GoogleCloudSecurityComplianceFrameworkDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#delete GoogleCloudSecurityComplianceFrameworkDeployment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#create GoogleCloudSecurityComplianceFrameworkDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#delete GoogleCloudSecurityComplianceFrameworkDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.cloudControlDeployment">cloud_control_deployment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_control_deployment`<sup>Required</sup> <a name="cloud_control_deployment" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.cloudControlDeployment"></a>

```python
cloud_control_deployment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a>]

---

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.majorRevisionIdInput">major_revision_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.majorRevisionId">major_revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.parameters"></a>

```python
parameters: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList</a>

---

##### `major_revision_id_input`<sup>Optional</sup> <a name="major_revision_id_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.majorRevisionIdInput"></a>

```python
major_revision_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a>]

---

##### `major_revision_id`<sup>Required</sup> <a name="major_revision_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.majorRevisionId"></a>

```python
major_revision_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a>]

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.putParameterValue">put_parameter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameter_value` <a name="put_parameter_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.putParameterValue"></a>

```python
def put_parameter_value(
  bool_value: bool | IResolvable = None,
  number_value: typing.Union[int, float] = None,
  oneof_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue = None,
  string_list_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue = None,
  string_value: str = None
) -> None
```

###### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.putParameterValue.parameter.boolValue"></a>

- *Type:* bool | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#bool_value GoogleCloudSecurityComplianceFrameworkDeployment#bool_value}

---

###### `number_value`<sup>Optional</sup> <a name="number_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.putParameterValue.parameter.numberValue"></a>

- *Type:* typing.Union[int, float]

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#number_value GoogleCloudSecurityComplianceFrameworkDeployment#number_value}

---

###### `oneof_value`<sup>Optional</sup> <a name="oneof_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.putParameterValue.parameter.oneofValue"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a>

oneof_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#oneof_value GoogleCloudSecurityComplianceFrameworkDeployment#oneof_value}

---

###### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.putParameterValue.parameter.stringListValue"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_list_value GoogleCloudSecurityComplianceFrameworkDeployment#string_list_value}

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.putParameterValue.parameter.stringValue"></a>

- *Type:* str

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_value GoogleCloudSecurityComplianceFrameworkDeployment#string_value}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.parameterValue">parameter_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.parameterValue"></a>

```python
parameter_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue">put_parameter_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue">reset_parameter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameter_value` <a name="put_parameter_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue"></a>

```python
def put_parameter_value(
  bool_value: bool | IResolvable = None,
  number_value: typing.Union[int, float] = None,
  string_list_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue = None,
  string_value: str = None
) -> None
```

###### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.boolValue"></a>

- *Type:* bool | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#bool_value GoogleCloudSecurityComplianceFrameworkDeployment#bool_value}

---

###### `number_value`<sup>Optional</sup> <a name="number_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.numberValue"></a>

- *Type:* typing.Union[int, float]

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#number_value GoogleCloudSecurityComplianceFrameworkDeployment#number_value}

---

###### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.stringListValue"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_list_value GoogleCloudSecurityComplianceFrameworkDeployment#string_list_value}

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.stringValue"></a>

- *Type:* str

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_value GoogleCloudSecurityComplianceFrameworkDeployment#string_value}

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parameter_value` <a name="reset_parameter_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue"></a>

```python
def reset_parameter_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue">parameter_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue"></a>

```python
parameter_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue">put_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue">reset_bool_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue">reset_number_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue">reset_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_string_list_value` <a name="put_string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue"></a>

```python
def put_string_list_value(
  values: typing.List[str]
) -> None
```

###### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue.parameter.values"></a>

- *Type:* typing.List[str]

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#values GoogleCloudSecurityComplianceFrameworkDeployment#values}

---

##### `reset_bool_value` <a name="reset_bool_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue"></a>

```python
def reset_bool_value() -> None
```

##### `reset_number_value` <a name="reset_number_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue"></a>

```python
def reset_number_value() -> None
```

##### `reset_string_list_value` <a name="reset_string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue"></a>

```python
def reset_string_list_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue">string_list_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput">bool_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput">number_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput">string_list_value_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `string_list_value`<sup>Required</sup> <a name="string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue"></a>

```python
string_list_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a>

---

##### `bool_value_input`<sup>Optional</sup> <a name="bool_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput"></a>

```python
bool_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_value_input`<sup>Optional</sup> <a name="number_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput"></a>

```python
number_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value_input`<sup>Optional</sup> <a name="string_list_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput"></a>

```python
string_list_value_input: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `bool_value`<sup>Required</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_value`<sup>Required</sup> <a name="number_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putOneofValue">put_oneof_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putStringListValue">put_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue">reset_bool_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue">reset_number_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue">reset_oneof_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue">reset_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_oneof_value` <a name="put_oneof_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putOneofValue"></a>

```python
def put_oneof_value(
  name: str = None,
  parameter_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putOneofValue.parameter.name"></a>

- *Type:* str

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#name GoogleCloudSecurityComplianceFrameworkDeployment#name}

---

###### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putOneofValue.parameter.parameterValue"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#parameter_value GoogleCloudSecurityComplianceFrameworkDeployment#parameter_value}

---

##### `put_string_list_value` <a name="put_string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putStringListValue"></a>

```python
def put_string_list_value(
  values: typing.List[str]
) -> None
```

###### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putStringListValue.parameter.values"></a>

- *Type:* typing.List[str]

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#values GoogleCloudSecurityComplianceFrameworkDeployment#values}

---

##### `reset_bool_value` <a name="reset_bool_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue"></a>

```python
def reset_bool_value() -> None
```

##### `reset_number_value` <a name="reset_number_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue"></a>

```python
def reset_number_value() -> None
```

##### `reset_oneof_value` <a name="reset_oneof_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue"></a>

```python
def reset_oneof_value() -> None
```

##### `reset_string_list_value` <a name="reset_string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue"></a>

```python
def reset_string_list_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue">oneof_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue">string_list_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput">bool_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput">number_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput">oneof_value_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput">string_list_value_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oneof_value`<sup>Required</sup> <a name="oneof_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue"></a>

```python
oneof_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference</a>

---

##### `string_list_value`<sup>Required</sup> <a name="string_list_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue"></a>

```python
string_list_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference</a>

---

##### `bool_value_input`<sup>Optional</sup> <a name="bool_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput"></a>

```python
bool_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_value_input`<sup>Optional</sup> <a name="number_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput"></a>

```python
number_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oneof_value_input`<sup>Optional</sup> <a name="oneof_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput"></a>

```python
oneof_value_input: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a>

---

##### `string_list_value_input`<sup>Optional</sup> <a name="string_list_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput"></a>

```python
string_list_value_input: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a>

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `bool_value`<sup>Required</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_value`<sup>Required</sup> <a name="number_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>]

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.putCloudControlDetails">put_cloud_control_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_control_details` <a name="put_cloud_control_details" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.putCloudControlDetails"></a>

```python
def put_cloud_control_details(
  major_revision_id: str,
  name: str,
  parameters: IResolvable | typing.List[GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters] = None
) -> None
```

###### `major_revision_id`<sup>Required</sup> <a name="major_revision_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.putCloudControlDetails.parameter.majorRevisionId"></a>

- *Type:* str

Major revision of cloudcontrol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#major_revision_id GoogleCloudSecurityComplianceFrameworkDeployment#major_revision_id}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.putCloudControlDetails.parameter.name"></a>

- *Type:* str

The name of the CloudControl in the format: “organizations/{organization}/locations/{location}/ cloudControls/{cloud-control}”.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#name GoogleCloudSecurityComplianceFrameworkDeployment#name}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.putCloudControlDetails.parameter.parameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a>]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#parameters GoogleCloudSecurityComplianceFrameworkDeployment#parameters}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.cloudControlDetails">cloud_control_details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.cloudControlDetailsInput">cloud_control_details_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.enforcementModeInput">enforcement_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_control_details`<sup>Required</sup> <a name="cloud_control_details" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.cloudControlDetails"></a>

```python
cloud_control_details: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference</a>

---

##### `cloud_control_details_input`<sup>Optional</sup> <a name="cloud_control_details_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.cloudControlDetailsInput"></a>

```python
cloud_control_details_input: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a>

---

##### `enforcement_mode_input`<sup>Optional</sup> <a name="enforcement_mode_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.enforcementModeInput"></a>

```python
enforcement_mode_input: str
```

- *Type:* str

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.frameworkInput">framework_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.majorRevisionIdInput">major_revision_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.framework">framework</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.majorRevisionId">major_revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `framework_input`<sup>Optional</sup> <a name="framework_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.frameworkInput"></a>

```python
framework_input: str
```

- *Type:* str

---

##### `major_revision_id_input`<sup>Optional</sup> <a name="major_revision_id_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.majorRevisionIdInput"></a>

```python
major_revision_id_input: str
```

- *Type:* str

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.framework"></a>

```python
framework: str
```

- *Type:* str

---

##### `major_revision_id`<sup>Required</sup> <a name="major_revision_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.majorRevisionId"></a>

```python
major_revision_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudSecurityComplianceFrameworkDeploymentFramework
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.putTargetResourceCreationConfig">put_target_resource_creation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resetExistingTargetResource">reset_existing_target_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resetTargetResourceCreationConfig">reset_target_resource_creation_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_resource_creation_config` <a name="put_target_resource_creation_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.putTargetResourceCreationConfig"></a>

```python
def put_target_resource_creation_config(
  folder_creation_config: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig = None,
  project_creation_config: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig = None
) -> None
```

###### `folder_creation_config`<sup>Optional</sup> <a name="folder_creation_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.putTargetResourceCreationConfig.parameter.folderCreationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a>

folder_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#folder_creation_config GoogleCloudSecurityComplianceFrameworkDeployment#folder_creation_config}

---

###### `project_creation_config`<sup>Optional</sup> <a name="project_creation_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.putTargetResourceCreationConfig.parameter.projectCreationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a>

project_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#project_creation_config GoogleCloudSecurityComplianceFrameworkDeployment#project_creation_config}

---

##### `reset_existing_target_resource` <a name="reset_existing_target_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resetExistingTargetResource"></a>

```python
def reset_existing_target_resource() -> None
```

##### `reset_target_resource_creation_config` <a name="reset_target_resource_creation_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resetTargetResourceCreationConfig"></a>

```python
def reset_target_resource_creation_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.targetResourceCreationConfig">target_resource_creation_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.existingTargetResourceInput">existing_target_resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.targetResourceCreationConfigInput">target_resource_creation_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.existingTargetResource">existing_target_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_resource_creation_config`<sup>Required</sup> <a name="target_resource_creation_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.targetResourceCreationConfig"></a>

```python
target_resource_creation_config: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference</a>

---

##### `existing_target_resource_input`<sup>Optional</sup> <a name="existing_target_resource_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.existingTargetResourceInput"></a>

```python
existing_target_resource_input: str
```

- *Type:* str

---

##### `target_resource_creation_config_input`<sup>Optional</sup> <a name="target_resource_creation_config_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.targetResourceCreationConfigInput"></a>

```python
target_resource_creation_config_input: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a>

---

##### `existing_target_resource`<sup>Required</sup> <a name="existing_target_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.existingTargetResource"></a>

```python
existing_target_resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.folderDisplayNameInput">folder_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.folderDisplayName">folder_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `folder_display_name_input`<sup>Optional</sup> <a name="folder_display_name_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.folderDisplayNameInput"></a>

```python
folder_display_name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `folder_display_name`<sup>Required</sup> <a name="folder_display_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.folderDisplayName"></a>

```python
folder_display_name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putFolderCreationConfig">put_folder_creation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putProjectCreationConfig">put_project_creation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resetFolderCreationConfig">reset_folder_creation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resetProjectCreationConfig">reset_project_creation_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_folder_creation_config` <a name="put_folder_creation_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putFolderCreationConfig"></a>

```python
def put_folder_creation_config(
  folder_display_name: str,
  parent: str
) -> None
```

###### `folder_display_name`<sup>Required</sup> <a name="folder_display_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putFolderCreationConfig.parameter.folderDisplayName"></a>

- *Type:* str

Display name of the folder to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#folder_display_name GoogleCloudSecurityComplianceFrameworkDeployment#folder_display_name}

---

###### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putFolderCreationConfig.parameter.parent"></a>

- *Type:* str

The parent of the folder to be created. It can be an organizations/{org} or folders/{folder}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#parent GoogleCloudSecurityComplianceFrameworkDeployment#parent}

---

##### `put_project_creation_config` <a name="put_project_creation_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putProjectCreationConfig"></a>

```python
def put_project_creation_config(
  billing_account_id: str,
  parent: str,
  project_display_name: str
) -> None
```

###### `billing_account_id`<sup>Required</sup> <a name="billing_account_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putProjectCreationConfig.parameter.billingAccountId"></a>

- *Type:* str

Billing account id to be used for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#billing_account_id GoogleCloudSecurityComplianceFrameworkDeployment#billing_account_id}

---

###### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putProjectCreationConfig.parameter.parent"></a>

- *Type:* str

organizations/{org} or folders/{folder}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#parent GoogleCloudSecurityComplianceFrameworkDeployment#parent}

---

###### `project_display_name`<sup>Required</sup> <a name="project_display_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putProjectCreationConfig.parameter.projectDisplayName"></a>

- *Type:* str

Display name of the project to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_security_compliance_framework_deployment#project_display_name GoogleCloudSecurityComplianceFrameworkDeployment#project_display_name}

---

##### `reset_folder_creation_config` <a name="reset_folder_creation_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resetFolderCreationConfig"></a>

```python
def reset_folder_creation_config() -> None
```

##### `reset_project_creation_config` <a name="reset_project_creation_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resetProjectCreationConfig"></a>

```python
def reset_project_creation_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.folderCreationConfig">folder_creation_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.projectCreationConfig">project_creation_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.folderCreationConfigInput">folder_creation_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.projectCreationConfigInput">project_creation_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `folder_creation_config`<sup>Required</sup> <a name="folder_creation_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.folderCreationConfig"></a>

```python
folder_creation_config: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference</a>

---

##### `project_creation_config`<sup>Required</sup> <a name="project_creation_config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.projectCreationConfig"></a>

```python
project_creation_config: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference</a>

---

##### `folder_creation_config_input`<sup>Optional</sup> <a name="folder_creation_config_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.folderCreationConfigInput"></a>

```python
folder_creation_config_input: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a>

---

##### `project_creation_config_input`<sup>Optional</sup> <a name="project_creation_config_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.projectCreationConfigInput"></a>

```python
project_creation_config_input: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.billingAccountIdInput">billing_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.projectDisplayNameInput">project_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.billingAccountId">billing_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.projectDisplayName">project_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_account_id_input`<sup>Optional</sup> <a name="billing_account_id_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.billingAccountIdInput"></a>

```python
billing_account_id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `project_display_name_input`<sup>Optional</sup> <a name="project_display_name_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.projectDisplayNameInput"></a>

```python
project_display_name_input: str
```

- *Type:* str

---

##### `billing_account_id`<sup>Required</sup> <a name="billing_account_id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.billingAccountId"></a>

```python
billing_account_id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `project_display_name`<sup>Required</sup> <a name="project_display_name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.projectDisplayName"></a>

```python
project_display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_security_compliance_framework_deployment

googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a>

---



