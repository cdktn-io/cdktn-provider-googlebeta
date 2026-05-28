# `googleBeyondcorpSecurityGatewayApplication` Submodule <a name="`googleBeyondcorpSecurityGatewayApplication` Submodule" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBeyondcorpSecurityGatewayApplication <a name="GoogleBeyondcorpSecurityGatewayApplication" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application google_beyondcorp_security_gateway_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  security_gateway_id: str,
  deletion_policy: str = None,
  display_name: str = None,
  endpoint_matchers: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers] = None,
  id: str = None,
  project: str = None,
  schema: str = None,
  timeouts: GoogleBeyondcorpSecurityGatewayApplicationTimeouts = None,
  upstreams: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationUpstreams] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | User-settable Application resource ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | ID of the Security Gateway resource this belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.endpointMatchers">endpoint_matchers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>]</code> | endpoint_matchers block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#id GoogleBeyondcorpSecurityGatewayApplication#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#project GoogleBeyondcorpSecurityGatewayApplication#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.schema">schema</a></code> | <code>str</code> | Type of the external application. Possible values: ["PROXY_GATEWAY", "API_GATEWAY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.upstreams">upstreams</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>]</code> | upstreams block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.applicationId"></a>

- *Type:* str

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#application_id GoogleBeyondcorpSecurityGatewayApplication#application_id}

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.securityGatewayId"></a>

- *Type:* str

ID of the Security Gateway resource this belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#security_gateway_id GoogleBeyondcorpSecurityGatewayApplication#security_gateway_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#deletion_policy GoogleBeyondcorpSecurityGatewayApplication#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#display_name GoogleBeyondcorpSecurityGatewayApplication#display_name}

---

##### `endpoint_matchers`<sup>Optional</sup> <a name="endpoint_matchers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.endpointMatchers"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>]

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#endpoint_matchers GoogleBeyondcorpSecurityGatewayApplication#endpoint_matchers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#id GoogleBeyondcorpSecurityGatewayApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#project GoogleBeyondcorpSecurityGatewayApplication#project}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.schema"></a>

- *Type:* str

Type of the external application. Possible values: ["PROXY_GATEWAY", "API_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#schema GoogleBeyondcorpSecurityGatewayApplication#schema}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#timeouts GoogleBeyondcorpSecurityGatewayApplication#timeouts}

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.upstreams"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>]

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#upstreams GoogleBeyondcorpSecurityGatewayApplication#upstreams}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putEndpointMatchers">put_endpoint_matchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putUpstreams">put_upstreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetEndpointMatchers">reset_endpoint_matchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetUpstreams">reset_upstreams</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_endpoint_matchers` <a name="put_endpoint_matchers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putEndpointMatchers"></a>

```python
def put_endpoint_matchers(
  value: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putEndpointMatchers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#create GoogleBeyondcorpSecurityGatewayApplication#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#delete GoogleBeyondcorpSecurityGatewayApplication#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#update GoogleBeyondcorpSecurityGatewayApplication#update}.

---

##### `put_upstreams` <a name="put_upstreams" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putUpstreams"></a>

```python
def put_upstreams(
  value: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationUpstreams]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putUpstreams.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>]

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_endpoint_matchers` <a name="reset_endpoint_matchers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetEndpointMatchers"></a>

```python
def reset_endpoint_matchers() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_upstreams` <a name="reset_upstreams" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetUpstreams"></a>

```python
def reset_upstreams() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleBeyondcorpSecurityGatewayApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleBeyondcorpSecurityGatewayApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBeyondcorpSecurityGatewayApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBeyondcorpSecurityGatewayApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBeyondcorpSecurityGatewayApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.endpointMatchers">endpoint_matchers</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference">GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.upstreams">upstreams</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.endpointMatchersInput">endpoint_matchers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.securityGatewayIdInput">security_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.upstreamsInput">upstreams_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `endpoint_matchers`<sup>Required</sup> <a name="endpoint_matchers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.endpointMatchers"></a>

```python
endpoint_matchers: GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.timeouts"></a>

```python
timeouts: GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference">GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `upstreams`<sup>Required</sup> <a name="upstreams" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.upstreams"></a>

```python
upstreams: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList</a>

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `endpoint_matchers_input`<sup>Optional</sup> <a name="endpoint_matchers_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.endpointMatchersInput"></a>

```python
endpoint_matchers_input: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `security_gateway_id_input`<sup>Optional</sup> <a name="security_gateway_id_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.securityGatewayIdInput"></a>

```python
security_gateway_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleBeyondcorpSecurityGatewayApplicationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a>

---

##### `upstreams_input`<sup>Optional</sup> <a name="upstreams_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.upstreamsInput"></a>

```python
upstreams_input: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationUpstreams]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.securityGatewayId"></a>

```python
security_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBeyondcorpSecurityGatewayApplicationConfig <a name="GoogleBeyondcorpSecurityGatewayApplicationConfig" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  security_gateway_id: str,
  deletion_policy: str = None,
  display_name: str = None,
  endpoint_matchers: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers] = None,
  id: str = None,
  project: str = None,
  schema: str = None,
  timeouts: GoogleBeyondcorpSecurityGatewayApplicationTimeouts = None,
  upstreams: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationUpstreams] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.applicationId">application_id</a></code> | <code>str</code> | User-settable Application resource ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | ID of the Security Gateway resource this belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.endpointMatchers">endpoint_matchers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>]</code> | endpoint_matchers block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#id GoogleBeyondcorpSecurityGatewayApplication#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#project GoogleBeyondcorpSecurityGatewayApplication#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.schema">schema</a></code> | <code>str</code> | Type of the external application. Possible values: ["PROXY_GATEWAY", "API_GATEWAY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.upstreams">upstreams</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>]</code> | upstreams block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#application_id GoogleBeyondcorpSecurityGatewayApplication#application_id}

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.securityGatewayId"></a>

```python
security_gateway_id: str
```

- *Type:* str

ID of the Security Gateway resource this belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#security_gateway_id GoogleBeyondcorpSecurityGatewayApplication#security_gateway_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#deletion_policy GoogleBeyondcorpSecurityGatewayApplication#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#display_name GoogleBeyondcorpSecurityGatewayApplication#display_name}

---

##### `endpoint_matchers`<sup>Optional</sup> <a name="endpoint_matchers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.endpointMatchers"></a>

```python
endpoint_matchers: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>]

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#endpoint_matchers GoogleBeyondcorpSecurityGatewayApplication#endpoint_matchers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#id GoogleBeyondcorpSecurityGatewayApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#project GoogleBeyondcorpSecurityGatewayApplication#project}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

Type of the external application. Possible values: ["PROXY_GATEWAY", "API_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#schema GoogleBeyondcorpSecurityGatewayApplication#schema}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.timeouts"></a>

```python
timeouts: GoogleBeyondcorpSecurityGatewayApplicationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#timeouts GoogleBeyondcorpSecurityGatewayApplication#timeouts}

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.upstreams"></a>

```python
upstreams: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationUpstreams]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>]

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#upstreams GoogleBeyondcorpSecurityGatewayApplication#upstreams}

---

### GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers <a name="GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers(
  hostname: str,
  ports: typing.List[typing.Union[int, float]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.property.hostname">hostname</a></code> | <code>str</code> | Required. Hostname of the application. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Optional. Ports of the application. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Required. Hostname of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#hostname GoogleBeyondcorpSecurityGatewayApplication#hostname}

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Optional. Ports of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#ports GoogleBeyondcorpSecurityGatewayApplication#ports}

---

### GoogleBeyondcorpSecurityGatewayApplicationTimeouts <a name="GoogleBeyondcorpSecurityGatewayApplicationTimeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#create GoogleBeyondcorpSecurityGatewayApplication#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#delete GoogleBeyondcorpSecurityGatewayApplication#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#update GoogleBeyondcorpSecurityGatewayApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#create GoogleBeyondcorpSecurityGatewayApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#delete GoogleBeyondcorpSecurityGatewayApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#update GoogleBeyondcorpSecurityGatewayApplication#update}.

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreams <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreams" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams(
  egress_policy: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy = None,
  external: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal = None,
  network: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork = None,
  proxy_protocol: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.egressPolicy">egress_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | egress_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.external">external</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal</a></code> | external block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.network">network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | network block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.proxyProtocol">proxy_protocol</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a></code> | proxy_protocol block. |

---

##### `egress_policy`<sup>Optional</sup> <a name="egress_policy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.egressPolicy"></a>

```python
egress_policy: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

egress_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#egress_policy GoogleBeyondcorpSecurityGatewayApplication#egress_policy}

---

##### `external`<sup>Optional</sup> <a name="external" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.external"></a>

```python
external: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal</a>

external block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#external GoogleBeyondcorpSecurityGatewayApplication#external}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.network"></a>

```python
network: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#network GoogleBeyondcorpSecurityGatewayApplication#network}

---

##### `proxy_protocol`<sup>Optional</sup> <a name="proxy_protocol" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.proxyProtocol"></a>

```python
proxy_protocol: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a>

proxy_protocol block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#proxy_protocol GoogleBeyondcorpSecurityGatewayApplication#proxy_protocol}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy(
  regions: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.property.regions">regions</a></code> | <code>typing.List[str]</code> | Required. List of regions where the application sends traffic to. |

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

Required. List of regions where the application sends traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#regions GoogleBeyondcorpSecurityGatewayApplication#regions}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal(
  endpoints: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal.property.endpoints">endpoints</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>]</code> | endpoints block. |

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal.property.endpoints"></a>

```python
endpoints: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>]

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#endpoints GoogleBeyondcorpSecurityGatewayApplication#endpoints}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints(
  hostname: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints.property.hostname">hostname</a></code> | <code>str</code> | Hostname of the endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port of the endpoint. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#hostname GoogleBeyondcorpSecurityGatewayApplication#hostname}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#port GoogleBeyondcorpSecurityGatewayApplication#port}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork.property.name">name</a></code> | <code>str</code> | Required. Network name is of the format: 'projects/{project}/global/networks/{network}'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork.property.name"></a>

```python
name: str
```

- *Type:* str

Required. Network name is of the format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#name GoogleBeyondcorpSecurityGatewayApplication#name}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol(
  allowed_client_headers: typing.List[str] = None,
  client_ip: bool | IResolvable = None,
  contextual_headers: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders = None,
  gateway_identity: str = None,
  metadata_headers: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.allowedClientHeaders">allowed_client_headers</a></code> | <code>typing.List[str]</code> | The configuration for the proxy. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.clientIp">client_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | Client IP configuration. The client IP address is included if true. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.contextualHeaders">contextual_headers</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a></code> | contextual_headers block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.gatewayIdentity">gateway_identity</a></code> | <code>str</code> | Gateway identity configuration. Possible values: ["RESOURCE_NAME"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.metadataHeaders">metadata_headers</a></code> | <code>typing.Mapping[str]</code> | Custom resource specific headers along with the values. |

---

##### `allowed_client_headers`<sup>Optional</sup> <a name="allowed_client_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.allowedClientHeaders"></a>

```python
allowed_client_headers: typing.List[str]
```

- *Type:* typing.List[str]

The configuration for the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#allowed_client_headers GoogleBeyondcorpSecurityGatewayApplication#allowed_client_headers}

---

##### `client_ip`<sup>Optional</sup> <a name="client_ip" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.clientIp"></a>

```python
client_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Client IP configuration. The client IP address is included if true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#client_ip GoogleBeyondcorpSecurityGatewayApplication#client_ip}

---

##### `contextual_headers`<sup>Optional</sup> <a name="contextual_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.contextualHeaders"></a>

```python
contextual_headers: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a>

contextual_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#contextual_headers GoogleBeyondcorpSecurityGatewayApplication#contextual_headers}

---

##### `gateway_identity`<sup>Optional</sup> <a name="gateway_identity" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.gatewayIdentity"></a>

```python
gateway_identity: str
```

- *Type:* str

Gateway identity configuration. Possible values: ["RESOURCE_NAME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#gateway_identity GoogleBeyondcorpSecurityGatewayApplication#gateway_identity}

---

##### `metadata_headers`<sup>Optional</sup> <a name="metadata_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.metadataHeaders"></a>

```python
metadata_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Custom resource specific headers along with the values.

The names should conform to RFC 9110:

> Field names SHOULD constrain themselves to alphanumeric characters, "-",
> and ".", and SHOULD begin with a letter.
> Field values SHOULD contain only ASCII printable characters and tab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#metadata_headers GoogleBeyondcorpSecurityGatewayApplication#metadata_headers}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders(
  device_info: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo = None,
  group_info: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo = None,
  output_type: str = None,
  user_info: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.deviceInfo">device_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a></code> | device_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.groupInfo">group_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a></code> | group_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.outputType">output_type</a></code> | <code>str</code> | Default output type for all enabled headers. Possible values: ["PROTOBUF", "JSON", "NONE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.userInfo">user_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a></code> | user_info block. |

---

##### `device_info`<sup>Optional</sup> <a name="device_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.deviceInfo"></a>

```python
device_info: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a>

device_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#device_info GoogleBeyondcorpSecurityGatewayApplication#device_info}

---

##### `group_info`<sup>Optional</sup> <a name="group_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.groupInfo"></a>

```python
group_info: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a>

group_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#group_info GoogleBeyondcorpSecurityGatewayApplication#group_info}

---

##### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

Default output type for all enabled headers. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#output_type GoogleBeyondcorpSecurityGatewayApplication#output_type}

---

##### `user_info`<sup>Optional</sup> <a name="user_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.userInfo"></a>

```python
user_info: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a>

user_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#user_info GoogleBeyondcorpSecurityGatewayApplication#user_info}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo(
  output_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo.property.outputType">output_type</a></code> | <code>str</code> | The output type of the delegated device info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

The output type of the delegated device info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#output_type GoogleBeyondcorpSecurityGatewayApplication#output_type}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo(
  output_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo.property.outputType">output_type</a></code> | <code>str</code> | The output type of the delegated group info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

The output type of the delegated group info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#output_type GoogleBeyondcorpSecurityGatewayApplication#output_type}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo(
  output_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo.property.outputType">output_type</a></code> | <code>str</code> | The output type of the delegated user info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

The output type of the delegated user info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#output_type GoogleBeyondcorpSecurityGatewayApplication#output_type}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList <a name="GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>]

---


### GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleBeyondcorpSecurityGatewayApplicationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>]

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.putEndpoints">put_endpoints</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_endpoints` <a name="put_endpoints" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.putEndpoints"></a>

```python
def put_endpoints(
  value: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.putEndpoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.endpointsInput">endpoints_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.endpoints"></a>

```python
endpoints: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList</a>

---

##### `endpoints_input`<sup>Optional</sup> <a name="endpoints_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.endpointsInput"></a>

```python
endpoints_input: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationUpstreams]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>]

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy">put_egress_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putExternal">put_external</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putProxyProtocol">put_proxy_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetEgressPolicy">reset_egress_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetExternal">reset_external</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetProxyProtocol">reset_proxy_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_egress_policy` <a name="put_egress_policy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy"></a>

```python
def put_egress_policy(
  regions: typing.List[str]
) -> None
```

###### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy.parameter.regions"></a>

- *Type:* typing.List[str]

Required. List of regions where the application sends traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#regions GoogleBeyondcorpSecurityGatewayApplication#regions}

---

##### `put_external` <a name="put_external" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putExternal"></a>

```python
def put_external(
  endpoints: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints]
) -> None
```

###### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putExternal.parameter.endpoints"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>]

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#endpoints GoogleBeyondcorpSecurityGatewayApplication#endpoints}

---

##### `put_network` <a name="put_network" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork"></a>

```python
def put_network(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork.parameter.name"></a>

- *Type:* str

Required. Network name is of the format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#name GoogleBeyondcorpSecurityGatewayApplication#name}

---

##### `put_proxy_protocol` <a name="put_proxy_protocol" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putProxyProtocol"></a>

```python
def put_proxy_protocol(
  allowed_client_headers: typing.List[str] = None,
  client_ip: bool | IResolvable = None,
  contextual_headers: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders = None,
  gateway_identity: str = None,
  metadata_headers: typing.Mapping[str] = None
) -> None
```

###### `allowed_client_headers`<sup>Optional</sup> <a name="allowed_client_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putProxyProtocol.parameter.allowedClientHeaders"></a>

- *Type:* typing.List[str]

The configuration for the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#allowed_client_headers GoogleBeyondcorpSecurityGatewayApplication#allowed_client_headers}

---

###### `client_ip`<sup>Optional</sup> <a name="client_ip" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putProxyProtocol.parameter.clientIp"></a>

- *Type:* bool | cdktn.IResolvable

Client IP configuration. The client IP address is included if true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#client_ip GoogleBeyondcorpSecurityGatewayApplication#client_ip}

---

###### `contextual_headers`<sup>Optional</sup> <a name="contextual_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putProxyProtocol.parameter.contextualHeaders"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a>

contextual_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#contextual_headers GoogleBeyondcorpSecurityGatewayApplication#contextual_headers}

---

###### `gateway_identity`<sup>Optional</sup> <a name="gateway_identity" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putProxyProtocol.parameter.gatewayIdentity"></a>

- *Type:* str

Gateway identity configuration. Possible values: ["RESOURCE_NAME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#gateway_identity GoogleBeyondcorpSecurityGatewayApplication#gateway_identity}

---

###### `metadata_headers`<sup>Optional</sup> <a name="metadata_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putProxyProtocol.parameter.metadataHeaders"></a>

- *Type:* typing.Mapping[str]

Custom resource specific headers along with the values.

The names should conform to RFC 9110:

> Field names SHOULD constrain themselves to alphanumeric characters, "-",
> and ".", and SHOULD begin with a letter.
> Field values SHOULD contain only ASCII printable characters and tab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#metadata_headers GoogleBeyondcorpSecurityGatewayApplication#metadata_headers}

---

##### `reset_egress_policy` <a name="reset_egress_policy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetEgressPolicy"></a>

```python
def reset_egress_policy() -> None
```

##### `reset_external` <a name="reset_external" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetExternal"></a>

```python
def reset_external() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_proxy_protocol` <a name="reset_proxy_protocol" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetProxyProtocol"></a>

```python
def reset_proxy_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicy">egress_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.external">external</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.network">network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.proxyProtocol">proxy_protocol</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicyInput">egress_policy_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.externalInput">external_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.networkInput">network_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.proxyProtocolInput">proxy_protocol_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `egress_policy`<sup>Required</sup> <a name="egress_policy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicy"></a>

```python
egress_policy: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference</a>

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.external"></a>

```python
external: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.network"></a>

```python
network: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference</a>

---

##### `proxy_protocol`<sup>Required</sup> <a name="proxy_protocol" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.proxyProtocol"></a>

```python
proxy_protocol: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference</a>

---

##### `egress_policy_input`<sup>Optional</sup> <a name="egress_policy_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicyInput"></a>

```python
egress_policy_input: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---

##### `external_input`<sup>Optional</sup> <a name="external_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.externalInput"></a>

```python
external_input: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal</a>

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.networkInput"></a>

```python
network_input: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---

##### `proxy_protocol_input`<sup>Optional</sup> <a name="proxy_protocol_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.proxyProtocolInput"></a>

```python
proxy_protocol_input: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleBeyondcorpSecurityGatewayApplicationUpstreams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.resetOutputType">reset_output_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_output_type` <a name="reset_output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.resetOutputType"></a>

```python
def reset_output_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.outputTypeInput">output_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.outputTypeInput"></a>

```python
output_type_input: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.resetOutputType">reset_output_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_output_type` <a name="reset_output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.resetOutputType"></a>

```python
def reset_output_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.outputTypeInput">output_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.outputTypeInput"></a>

```python
output_type_input: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putDeviceInfo">put_device_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putGroupInfo">put_group_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putUserInfo">put_user_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetDeviceInfo">reset_device_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetGroupInfo">reset_group_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetOutputType">reset_output_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetUserInfo">reset_user_info</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_device_info` <a name="put_device_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putDeviceInfo"></a>

```python
def put_device_info(
  output_type: str = None
) -> None
```

###### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putDeviceInfo.parameter.outputType"></a>

- *Type:* str

The output type of the delegated device info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#output_type GoogleBeyondcorpSecurityGatewayApplication#output_type}

---

##### `put_group_info` <a name="put_group_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putGroupInfo"></a>

```python
def put_group_info(
  output_type: str = None
) -> None
```

###### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putGroupInfo.parameter.outputType"></a>

- *Type:* str

The output type of the delegated group info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#output_type GoogleBeyondcorpSecurityGatewayApplication#output_type}

---

##### `put_user_info` <a name="put_user_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putUserInfo"></a>

```python
def put_user_info(
  output_type: str = None
) -> None
```

###### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putUserInfo.parameter.outputType"></a>

- *Type:* str

The output type of the delegated user info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#output_type GoogleBeyondcorpSecurityGatewayApplication#output_type}

---

##### `reset_device_info` <a name="reset_device_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetDeviceInfo"></a>

```python
def reset_device_info() -> None
```

##### `reset_group_info` <a name="reset_group_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetGroupInfo"></a>

```python
def reset_group_info() -> None
```

##### `reset_output_type` <a name="reset_output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetOutputType"></a>

```python
def reset_output_type() -> None
```

##### `reset_user_info` <a name="reset_user_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetUserInfo"></a>

```python
def reset_user_info() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.deviceInfo">device_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.groupInfo">group_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.userInfo">user_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.deviceInfoInput">device_info_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.groupInfoInput">group_info_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.outputTypeInput">output_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.userInfoInput">user_info_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_info`<sup>Required</sup> <a name="device_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.deviceInfo"></a>

```python
device_info: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference</a>

---

##### `group_info`<sup>Required</sup> <a name="group_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.groupInfo"></a>

```python
group_info: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference</a>

---

##### `user_info`<sup>Required</sup> <a name="user_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.userInfo"></a>

```python
user_info: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference</a>

---

##### `device_info_input`<sup>Optional</sup> <a name="device_info_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.deviceInfoInput"></a>

```python
device_info_input: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a>

---

##### `group_info_input`<sup>Optional</sup> <a name="group_info_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.groupInfoInput"></a>

```python
group_info_input: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a>

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.outputTypeInput"></a>

```python
output_type_input: str
```

- *Type:* str

---

##### `user_info_input`<sup>Optional</sup> <a name="user_info_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.userInfoInput"></a>

```python
user_info_input: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a>

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.resetOutputType">reset_output_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_output_type` <a name="reset_output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.resetOutputType"></a>

```python
def reset_output_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.outputTypeInput">output_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.outputTypeInput"></a>

```python
output_type_input: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway_application

googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.putContextualHeaders">put_contextual_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetAllowedClientHeaders">reset_allowed_client_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetClientIp">reset_client_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetContextualHeaders">reset_contextual_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetGatewayIdentity">reset_gateway_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetMetadataHeaders">reset_metadata_headers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_contextual_headers` <a name="put_contextual_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.putContextualHeaders"></a>

```python
def put_contextual_headers(
  device_info: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo = None,
  group_info: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo = None,
  output_type: str = None,
  user_info: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo = None
) -> None
```

###### `device_info`<sup>Optional</sup> <a name="device_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.putContextualHeaders.parameter.deviceInfo"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a>

device_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#device_info GoogleBeyondcorpSecurityGatewayApplication#device_info}

---

###### `group_info`<sup>Optional</sup> <a name="group_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.putContextualHeaders.parameter.groupInfo"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a>

group_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#group_info GoogleBeyondcorpSecurityGatewayApplication#group_info}

---

###### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.putContextualHeaders.parameter.outputType"></a>

- *Type:* str

Default output type for all enabled headers. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#output_type GoogleBeyondcorpSecurityGatewayApplication#output_type}

---

###### `user_info`<sup>Optional</sup> <a name="user_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.putContextualHeaders.parameter.userInfo"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a>

user_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway_application#user_info GoogleBeyondcorpSecurityGatewayApplication#user_info}

---

##### `reset_allowed_client_headers` <a name="reset_allowed_client_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetAllowedClientHeaders"></a>

```python
def reset_allowed_client_headers() -> None
```

##### `reset_client_ip` <a name="reset_client_ip" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetClientIp"></a>

```python
def reset_client_ip() -> None
```

##### `reset_contextual_headers` <a name="reset_contextual_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetContextualHeaders"></a>

```python
def reset_contextual_headers() -> None
```

##### `reset_gateway_identity` <a name="reset_gateway_identity" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetGatewayIdentity"></a>

```python
def reset_gateway_identity() -> None
```

##### `reset_metadata_headers` <a name="reset_metadata_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetMetadataHeaders"></a>

```python
def reset_metadata_headers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.contextualHeaders">contextual_headers</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.allowedClientHeadersInput">allowed_client_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.clientIpInput">client_ip_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.contextualHeadersInput">contextual_headers_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.gatewayIdentityInput">gateway_identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.metadataHeadersInput">metadata_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.allowedClientHeaders">allowed_client_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.clientIp">client_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.gatewayIdentity">gateway_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.metadataHeaders">metadata_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contextual_headers`<sup>Required</sup> <a name="contextual_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.contextualHeaders"></a>

```python
contextual_headers: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference</a>

---

##### `allowed_client_headers_input`<sup>Optional</sup> <a name="allowed_client_headers_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.allowedClientHeadersInput"></a>

```python
allowed_client_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_ip_input`<sup>Optional</sup> <a name="client_ip_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.clientIpInput"></a>

```python
client_ip_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `contextual_headers_input`<sup>Optional</sup> <a name="contextual_headers_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.contextualHeadersInput"></a>

```python
contextual_headers_input: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a>

---

##### `gateway_identity_input`<sup>Optional</sup> <a name="gateway_identity_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.gatewayIdentityInput"></a>

```python
gateway_identity_input: str
```

- *Type:* str

---

##### `metadata_headers_input`<sup>Optional</sup> <a name="metadata_headers_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.metadataHeadersInput"></a>

```python
metadata_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allowed_client_headers`<sup>Required</sup> <a name="allowed_client_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.allowedClientHeaders"></a>

```python
allowed_client_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_ip`<sup>Required</sup> <a name="client_ip" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.clientIp"></a>

```python
client_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `gateway_identity`<sup>Required</sup> <a name="gateway_identity" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.gatewayIdentity"></a>

```python
gateway_identity: str
```

- *Type:* str

---

##### `metadata_headers`<sup>Required</sup> <a name="metadata_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.metadataHeaders"></a>

```python
metadata_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a>

---



