# `googleDesignCenterApplication` Submodule <a name="`googleDesignCenterApplication` Submodule" id="@cdktn/provider-google-beta.googleDesignCenterApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDesignCenterApplication <a name="GoogleDesignCenterApplication" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application google_design_center_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplication(
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
  location: str,
  scope: GoogleDesignCenterApplicationScope,
  source: GoogleDesignCenterApplicationSource,
  space: str,
  app_parameters: IResolvable | typing.List[GoogleDesignCenterApplicationAppParameters] = None,
  attributes: GoogleDesignCenterApplicationAttributes = None,
  component_parameters: IResolvable | typing.List[GoogleDesignCenterApplicationComponentParameters] = None,
  composite_application_parameters: GoogleDesignCenterApplicationCompositeApplicationParameters = None,
  connection_configs: IResolvable | typing.List[GoogleDesignCenterApplicationConnectionConfigs] = None,
  deletion_policy: str = None,
  deployment_project: str = None,
  deployment_region: str = None,
  deployment_target: GoogleDesignCenterApplicationDeploymentTarget = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  roles_apis_config: IResolvable | typing.List[GoogleDesignCenterApplicationRolesApisConfig] = None,
  service_account: str = None,
  timeouts: GoogleDesignCenterApplicationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | The ID of the application. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the space. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.space">space</a></code> | <code>str</code> | The space for the application. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.appParameters">app_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>]</code> | app_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a></code> | attributes block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.componentParameters">component_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>]</code> | component_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.compositeApplicationParameters">composite_application_parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a></code> | composite_application_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.connectionConfigs">connection_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>]</code> | connection_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.deploymentProject">deployment_project</a></code> | <code>str</code> | Deployment project. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.deploymentRegion">deployment_region</a></code> | <code>str</code> | Deployment region. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.deploymentTarget">deployment_target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a></code> | deployment_target block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the application. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#id GoogleDesignCenterApplication#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#project GoogleDesignCenterApplication#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.rolesApisConfig">roles_apis_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>]</code> | roles_apis_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Service account for deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.applicationId"></a>

- *Type:* str

The ID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#application_id GoogleDesignCenterApplication#application_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.location"></a>

- *Type:* str

The location of the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#location GoogleDesignCenterApplication#location}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#scope GoogleDesignCenterApplication#scope}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#source GoogleDesignCenterApplication#source}

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.space"></a>

- *Type:* str

The space for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#space GoogleDesignCenterApplication#space}

---

##### `app_parameters`<sup>Optional</sup> <a name="app_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.appParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>]

app_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#app_parameters GoogleDesignCenterApplication#app_parameters}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.attributes"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#attributes GoogleDesignCenterApplication#attributes}

---

##### `component_parameters`<sup>Optional</sup> <a name="component_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.componentParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>]

component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#component_parameters GoogleDesignCenterApplication#component_parameters}

---

##### `composite_application_parameters`<sup>Optional</sup> <a name="composite_application_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.compositeApplicationParameters"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a>

composite_application_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#composite_application_parameters GoogleDesignCenterApplication#composite_application_parameters}

---

##### `connection_configs`<sup>Optional</sup> <a name="connection_configs" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.connectionConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>]

connection_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#connection_configs GoogleDesignCenterApplication#connection_configs}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deletion_policy GoogleDesignCenterApplication#deletion_policy}

---

##### `deployment_project`<sup>Optional</sup> <a name="deployment_project" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.deploymentProject"></a>

- *Type:* str

Deployment project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_project GoogleDesignCenterApplication#deployment_project}

---

##### `deployment_region`<sup>Optional</sup> <a name="deployment_region" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.deploymentRegion"></a>

- *Type:* str

Deployment region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_region GoogleDesignCenterApplication#deployment_region}

---

##### `deployment_target`<sup>Optional</sup> <a name="deployment_target" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.deploymentTarget"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a>

deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_target GoogleDesignCenterApplication#deployment_target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.description"></a>

- *Type:* str

Description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#description GoogleDesignCenterApplication#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.displayName"></a>

- *Type:* str

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#id GoogleDesignCenterApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#project GoogleDesignCenterApplication#project}.

---

##### `roles_apis_config`<sup>Optional</sup> <a name="roles_apis_config" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.rolesApisConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>]

roles_apis_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#roles_apis_config GoogleDesignCenterApplication#roles_apis_config}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Service account for deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#service_account GoogleDesignCenterApplication#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#timeouts GoogleDesignCenterApplication#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAppParameters">put_app_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putComponentParameters">put_component_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putCompositeApplicationParameters">put_composite_application_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putConnectionConfigs">put_connection_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putDeploymentTarget">put_deployment_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putRolesApisConfig">put_roles_apis_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetAppParameters">reset_app_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetComponentParameters">reset_component_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetCompositeApplicationParameters">reset_composite_application_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetConnectionConfigs">reset_connection_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentProject">reset_deployment_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentRegion">reset_deployment_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentTarget">reset_deployment_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetRolesApisConfig">reset_roles_apis_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_app_parameters` <a name="put_app_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAppParameters"></a>

```python
def put_app_parameters(
  value: IResolvable | typing.List[GoogleDesignCenterApplicationAppParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAppParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>]

---

##### `put_attributes` <a name="put_attributes" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAttributes"></a>

```python
def put_attributes(
  business_owners: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesBusinessOwners] = None,
  criticality: GoogleDesignCenterApplicationAttributesCriticality = None,
  developer_owners: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesDeveloperOwners] = None,
  environment: GoogleDesignCenterApplicationAttributesEnvironment = None,
  operator_owners: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesOperatorOwners] = None
) -> None
```

###### `business_owners`<sup>Optional</sup> <a name="business_owners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAttributes.parameter.businessOwners"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>]

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#business_owners GoogleDesignCenterApplication#business_owners}

---

###### `criticality`<sup>Optional</sup> <a name="criticality" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAttributes.parameter.criticality"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#criticality GoogleDesignCenterApplication#criticality}

---

###### `developer_owners`<sup>Optional</sup> <a name="developer_owners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAttributes.parameter.developerOwners"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>]

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#developer_owners GoogleDesignCenterApplication#developer_owners}

---

###### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAttributes.parameter.environment"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#environment GoogleDesignCenterApplication#environment}

---

###### `operator_owners`<sup>Optional</sup> <a name="operator_owners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAttributes.parameter.operatorOwners"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>]

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#operator_owners GoogleDesignCenterApplication#operator_owners}

---

##### `put_component_parameters` <a name="put_component_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putComponentParameters"></a>

```python
def put_component_parameters(
  value: IResolvable | typing.List[GoogleDesignCenterApplicationComponentParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putComponentParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>]

---

##### `put_composite_application_parameters` <a name="put_composite_application_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putCompositeApplicationParameters"></a>

```python
def put_composite_application_parameters(
  service_account_map: typing.Mapping[str] = None
) -> None
```

###### `service_account_map`<sup>Optional</sup> <a name="service_account_map" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putCompositeApplicationParameters.parameter.serviceAccountMap"></a>

- *Type:* typing.Mapping[str]

A map from a component URI to the service account that deploys the component.

Keys use the format
'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/components/{component}'
and values use the format
'projects/{project}/serviceAccounts/{email_address}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#service_account_map GoogleDesignCenterApplication#service_account_map}

---

##### `put_connection_configs` <a name="put_connection_configs" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putConnectionConfigs"></a>

```python
def put_connection_configs(
  value: IResolvable | typing.List[GoogleDesignCenterApplicationConnectionConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putConnectionConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>]

---

##### `put_deployment_target` <a name="put_deployment_target" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putDeploymentTarget"></a>

```python
def put_deployment_target(
  gke_deployment_target: GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget = None
) -> None
```

###### `gke_deployment_target`<sup>Optional</sup> <a name="gke_deployment_target" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putDeploymentTarget.parameter.gkeDeploymentTarget"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

gke_deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#gke_deployment_target GoogleDesignCenterApplication#gke_deployment_target}

---

##### `put_roles_apis_config` <a name="put_roles_apis_config" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putRolesApisConfig"></a>

```python
def put_roles_apis_config(
  value: IResolvable | typing.List[GoogleDesignCenterApplicationRolesApisConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putRolesApisConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>]

---

##### `put_scope` <a name="put_scope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putScope"></a>

```python
def put_scope(
  type: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putScope.parameter.type"></a>

- *Type:* str

Scope type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#type GoogleDesignCenterApplication#type}

---

##### `put_source` <a name="put_source" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putSource"></a>

```python
def put_source(
  application_template_revision: str = None
) -> None
```

###### `application_template_revision`<sup>Optional</sup> <a name="application_template_revision" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putSource.parameter.applicationTemplateRevision"></a>

- *Type:* str

Application template revision URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#application_template_revision GoogleDesignCenterApplication#application_template_revision}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#create GoogleDesignCenterApplication#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#delete GoogleDesignCenterApplication#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#update GoogleDesignCenterApplication#update}.

---

##### `reset_app_parameters` <a name="reset_app_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetAppParameters"></a>

```python
def reset_app_parameters() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_component_parameters` <a name="reset_component_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetComponentParameters"></a>

```python
def reset_component_parameters() -> None
```

##### `reset_composite_application_parameters` <a name="reset_composite_application_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetCompositeApplicationParameters"></a>

```python
def reset_composite_application_parameters() -> None
```

##### `reset_connection_configs` <a name="reset_connection_configs" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetConnectionConfigs"></a>

```python
def reset_connection_configs() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_deployment_project` <a name="reset_deployment_project" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentProject"></a>

```python
def reset_deployment_project() -> None
```

##### `reset_deployment_region` <a name="reset_deployment_region" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentRegion"></a>

```python
def reset_deployment_region() -> None
```

##### `reset_deployment_target` <a name="reset_deployment_target" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentTarget"></a>

```python
def reset_deployment_target() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_roles_apis_config` <a name="reset_roles_apis_config" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetRolesApisConfig"></a>

```python
def reset_roles_apis_config() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDesignCenterApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDesignCenterApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDesignCenterApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDesignCenterApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDesignCenterApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.apphubApplication">apphub_application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.appParameters">app_parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList">GoogleDesignCenterApplicationAppParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference">GoogleDesignCenterApplicationAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.componentParameters">component_parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList">GoogleDesignCenterApplicationComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.compositeApplicationParameters">composite_application_parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference">GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connectionConfigs">connection_configs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList">GoogleDesignCenterApplicationConnectionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentMetadata">deployment_metadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList">GoogleDesignCenterApplicationDeploymentMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentTarget">deployment_target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference">GoogleDesignCenterApplicationDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.rolesApisConfig">roles_apis_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList">GoogleDesignCenterApplicationRolesApisConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference">GoogleDesignCenterApplicationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.source">source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference">GoogleDesignCenterApplicationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference">GoogleDesignCenterApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.appParametersInput">app_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.attributesInput">attributes_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.componentParametersInput">component_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.compositeApplicationParametersInput">composite_application_parameters_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connectionConfigsInput">connection_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentProjectInput">deployment_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentRegionInput">deployment_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentTargetInput">deployment_target_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.rolesApisConfigInput">roles_apis_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.scopeInput">scope_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.sourceInput">source_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.spaceInput">space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentProject">deployment_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentRegion">deployment_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.space">space</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `apphub_application`<sup>Required</sup> <a name="apphub_application" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.apphubApplication"></a>

```python
apphub_application: str
```

- *Type:* str

---

##### `app_parameters`<sup>Required</sup> <a name="app_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.appParameters"></a>

```python
app_parameters: GoogleDesignCenterApplicationAppParametersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList">GoogleDesignCenterApplicationAppParametersList</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.attributes"></a>

```python
attributes: GoogleDesignCenterApplicationAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference">GoogleDesignCenterApplicationAttributesOutputReference</a>

---

##### `component_parameters`<sup>Required</sup> <a name="component_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.componentParameters"></a>

```python
component_parameters: GoogleDesignCenterApplicationComponentParametersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList">GoogleDesignCenterApplicationComponentParametersList</a>

---

##### `composite_application_parameters`<sup>Required</sup> <a name="composite_application_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.compositeApplicationParameters"></a>

```python
composite_application_parameters: GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference">GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference</a>

---

##### `connection_configs`<sup>Required</sup> <a name="connection_configs" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connectionConfigs"></a>

```python
connection_configs: GoogleDesignCenterApplicationConnectionConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList">GoogleDesignCenterApplicationConnectionConfigsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deployment_metadata`<sup>Required</sup> <a name="deployment_metadata" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentMetadata"></a>

```python
deployment_metadata: GoogleDesignCenterApplicationDeploymentMetadataList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList">GoogleDesignCenterApplicationDeploymentMetadataList</a>

---

##### `deployment_target`<sup>Required</sup> <a name="deployment_target" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentTarget"></a>

```python
deployment_target: GoogleDesignCenterApplicationDeploymentTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference">GoogleDesignCenterApplicationDeploymentTargetOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `roles_apis_config`<sup>Required</sup> <a name="roles_apis_config" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.rolesApisConfig"></a>

```python
roles_apis_config: GoogleDesignCenterApplicationRolesApisConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList">GoogleDesignCenterApplicationRolesApisConfigList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.scope"></a>

```python
scope: GoogleDesignCenterApplicationScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference">GoogleDesignCenterApplicationScopeOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.source"></a>

```python
source: GoogleDesignCenterApplicationSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference">GoogleDesignCenterApplicationSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.timeouts"></a>

```python
timeouts: GoogleDesignCenterApplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference">GoogleDesignCenterApplicationTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `app_parameters_input`<sup>Optional</sup> <a name="app_parameters_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.appParametersInput"></a>

```python
app_parameters_input: IResolvable | typing.List[GoogleDesignCenterApplicationAppParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.attributesInput"></a>

```python
attributes_input: GoogleDesignCenterApplicationAttributes
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a>

---

##### `component_parameters_input`<sup>Optional</sup> <a name="component_parameters_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.componentParametersInput"></a>

```python
component_parameters_input: IResolvable | typing.List[GoogleDesignCenterApplicationComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>]

---

##### `composite_application_parameters_input`<sup>Optional</sup> <a name="composite_application_parameters_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.compositeApplicationParametersInput"></a>

```python
composite_application_parameters_input: GoogleDesignCenterApplicationCompositeApplicationParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a>

---

##### `connection_configs_input`<sup>Optional</sup> <a name="connection_configs_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connectionConfigsInput"></a>

```python
connection_configs_input: IResolvable | typing.List[GoogleDesignCenterApplicationConnectionConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `deployment_project_input`<sup>Optional</sup> <a name="deployment_project_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentProjectInput"></a>

```python
deployment_project_input: str
```

- *Type:* str

---

##### `deployment_region_input`<sup>Optional</sup> <a name="deployment_region_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentRegionInput"></a>

```python
deployment_region_input: str
```

- *Type:* str

---

##### `deployment_target_input`<sup>Optional</sup> <a name="deployment_target_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentTargetInput"></a>

```python
deployment_target_input: GoogleDesignCenterApplicationDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `roles_apis_config_input`<sup>Optional</sup> <a name="roles_apis_config_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.rolesApisConfigInput"></a>

```python
roles_apis_config_input: IResolvable | typing.List[GoogleDesignCenterApplicationRolesApisConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.scopeInput"></a>

```python
scope_input: GoogleDesignCenterApplicationScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a>

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.sourceInput"></a>

```python
source_input: GoogleDesignCenterApplicationSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a>

---

##### `space_input`<sup>Optional</sup> <a name="space_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.spaceInput"></a>

```python
space_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDesignCenterApplicationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a>

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `deployment_project`<sup>Required</sup> <a name="deployment_project" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentProject"></a>

```python
deployment_project: str
```

- *Type:* str

---

##### `deployment_region`<sup>Required</sup> <a name="deployment_region" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentRegion"></a>

```python
deployment_region: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.space"></a>

```python
space: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDesignCenterApplicationAppParameters <a name="GoogleDesignCenterApplicationAppParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters(
  key: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters.property.key">key</a></code> | <code>str</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters.property.value">value</a></code> | <code>str</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#key GoogleDesignCenterApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#value GoogleDesignCenterApplication#value}

---

### GoogleDesignCenterApplicationAttributes <a name="GoogleDesignCenterApplicationAttributes" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes(
  business_owners: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesBusinessOwners] = None,
  criticality: GoogleDesignCenterApplicationAttributesCriticality = None,
  developer_owners: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesDeveloperOwners] = None,
  environment: GoogleDesignCenterApplicationAttributesEnvironment = None,
  operator_owners: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesOperatorOwners] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.businessOwners">business_owners</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>]</code> | business_owners block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.criticality">criticality</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a></code> | criticality block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.developerOwners">developer_owners</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>]</code> | developer_owners block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a></code> | environment block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.operatorOwners">operator_owners</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>]</code> | operator_owners block. |

---

##### `business_owners`<sup>Optional</sup> <a name="business_owners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.businessOwners"></a>

```python
business_owners: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesBusinessOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>]

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#business_owners GoogleDesignCenterApplication#business_owners}

---

##### `criticality`<sup>Optional</sup> <a name="criticality" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.criticality"></a>

```python
criticality: GoogleDesignCenterApplicationAttributesCriticality
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#criticality GoogleDesignCenterApplication#criticality}

---

##### `developer_owners`<sup>Optional</sup> <a name="developer_owners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.developerOwners"></a>

```python
developer_owners: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesDeveloperOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>]

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#developer_owners GoogleDesignCenterApplication#developer_owners}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.environment"></a>

```python
environment: GoogleDesignCenterApplicationAttributesEnvironment
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#environment GoogleDesignCenterApplication#environment}

---

##### `operator_owners`<sup>Optional</sup> <a name="operator_owners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.operatorOwners"></a>

```python
operator_owners: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesOperatorOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>]

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#operator_owners GoogleDesignCenterApplication#operator_owners}

---

### GoogleDesignCenterApplicationAttributesBusinessOwners <a name="GoogleDesignCenterApplicationAttributesBusinessOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners(
  email: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners.property.email">email</a></code> | <code>str</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners.property.displayName">display_name</a></code> | <code>str</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners.property.email"></a>

```python
email: str
```

- *Type:* str

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#email GoogleDesignCenterApplication#email}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}

---

### GoogleDesignCenterApplicationAttributesCriticality <a name="GoogleDesignCenterApplicationAttributesCriticality" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality.property.type">type</a></code> | <code>str</code> | Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH', 'MEDIUM' and 'LOW'. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality.property.type"></a>

```python
type: str
```

- *Type:* str

Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH', 'MEDIUM' and 'LOW'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#type GoogleDesignCenterApplication#type}

---

### GoogleDesignCenterApplicationAttributesDeveloperOwners <a name="GoogleDesignCenterApplicationAttributesDeveloperOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners(
  email: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners.property.email">email</a></code> | <code>str</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners.property.displayName">display_name</a></code> | <code>str</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners.property.email"></a>

```python
email: str
```

- *Type:* str

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#email GoogleDesignCenterApplication#email}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}

---

### GoogleDesignCenterApplicationAttributesEnvironment <a name="GoogleDesignCenterApplicationAttributesEnvironment" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment.property.type">type</a></code> | <code>str</code> | Environment type. Possible values are 'PRODUCTION', 'STAGING', 'TEST' and 'DEVELOPMENT'. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment.property.type"></a>

```python
type: str
```

- *Type:* str

Environment type. Possible values are 'PRODUCTION', 'STAGING', 'TEST' and 'DEVELOPMENT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#type GoogleDesignCenterApplication#type}

---

### GoogleDesignCenterApplicationAttributesOperatorOwners <a name="GoogleDesignCenterApplicationAttributesOperatorOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners(
  email: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners.property.email">email</a></code> | <code>str</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners.property.displayName">display_name</a></code> | <code>str</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners.property.email"></a>

```python
email: str
```

- *Type:* str

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#email GoogleDesignCenterApplication#email}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}

---

### GoogleDesignCenterApplicationComponentParameters <a name="GoogleDesignCenterApplicationComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters(
  component: str,
  parameters: IResolvable | typing.List[GoogleDesignCenterApplicationComponentParametersParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters.property.component">component</a></code> | <code>str</code> | The URI of the component that the parameters belong to. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>]</code> | parameters block. |

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters.property.component"></a>

```python
component: str
```

- *Type:* str

The URI of the component that the parameters belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#component GoogleDesignCenterApplication#component}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters.property.parameters"></a>

```python
parameters: IResolvable | typing.List[GoogleDesignCenterApplicationComponentParametersParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#parameters GoogleDesignCenterApplication#parameters}

---

### GoogleDesignCenterApplicationComponentParametersParameters <a name="GoogleDesignCenterApplicationComponentParametersParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters(
  key: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters.property.key">key</a></code> | <code>str</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters.property.value">value</a></code> | <code>str</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#key GoogleDesignCenterApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#value GoogleDesignCenterApplication#value}

---

### GoogleDesignCenterApplicationCompositeApplicationParameters <a name="GoogleDesignCenterApplicationCompositeApplicationParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters(
  service_account_map: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters.property.serviceAccountMap">service_account_map</a></code> | <code>typing.Mapping[str]</code> | A map from a component URI to the service account that deploys the component. |

---

##### `service_account_map`<sup>Optional</sup> <a name="service_account_map" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters.property.serviceAccountMap"></a>

```python
service_account_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map from a component URI to the service account that deploys the component.

Keys use the format
'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/components/{component}'
and values use the format
'projects/{project}/serviceAccounts/{email_address}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#service_account_map GoogleDesignCenterApplication#service_account_map}

---

### GoogleDesignCenterApplicationConfig <a name="GoogleDesignCenterApplicationConfig" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  location: str,
  scope: GoogleDesignCenterApplicationScope,
  source: GoogleDesignCenterApplicationSource,
  space: str,
  app_parameters: IResolvable | typing.List[GoogleDesignCenterApplicationAppParameters] = None,
  attributes: GoogleDesignCenterApplicationAttributes = None,
  component_parameters: IResolvable | typing.List[GoogleDesignCenterApplicationComponentParameters] = None,
  composite_application_parameters: GoogleDesignCenterApplicationCompositeApplicationParameters = None,
  connection_configs: IResolvable | typing.List[GoogleDesignCenterApplicationConnectionConfigs] = None,
  deletion_policy: str = None,
  deployment_project: str = None,
  deployment_region: str = None,
  deployment_target: GoogleDesignCenterApplicationDeploymentTarget = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  roles_apis_config: IResolvable | typing.List[GoogleDesignCenterApplicationRolesApisConfig] = None,
  service_account: str = None,
  timeouts: GoogleDesignCenterApplicationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.applicationId">application_id</a></code> | <code>str</code> | The ID of the application. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.location">location</a></code> | <code>str</code> | The location of the space. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.space">space</a></code> | <code>str</code> | The space for the application. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.appParameters">app_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>]</code> | app_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a></code> | attributes block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.componentParameters">component_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>]</code> | component_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.compositeApplicationParameters">composite_application_parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a></code> | composite_application_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.connectionConfigs">connection_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>]</code> | connection_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentProject">deployment_project</a></code> | <code>str</code> | Deployment project. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentRegion">deployment_region</a></code> | <code>str</code> | Deployment region. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentTarget">deployment_target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a></code> | deployment_target block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.description">description</a></code> | <code>str</code> | Description of the application. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#id GoogleDesignCenterApplication#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#project GoogleDesignCenterApplication#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.rolesApisConfig">roles_apis_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>]</code> | roles_apis_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Service account for deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

The ID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#application_id GoogleDesignCenterApplication#application_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#location GoogleDesignCenterApplication#location}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.scope"></a>

```python
scope: GoogleDesignCenterApplicationScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#scope GoogleDesignCenterApplication#scope}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.source"></a>

```python
source: GoogleDesignCenterApplicationSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#source GoogleDesignCenterApplication#source}

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.space"></a>

```python
space: str
```

- *Type:* str

The space for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#space GoogleDesignCenterApplication#space}

---

##### `app_parameters`<sup>Optional</sup> <a name="app_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.appParameters"></a>

```python
app_parameters: IResolvable | typing.List[GoogleDesignCenterApplicationAppParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>]

app_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#app_parameters GoogleDesignCenterApplication#app_parameters}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.attributes"></a>

```python
attributes: GoogleDesignCenterApplicationAttributes
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#attributes GoogleDesignCenterApplication#attributes}

---

##### `component_parameters`<sup>Optional</sup> <a name="component_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.componentParameters"></a>

```python
component_parameters: IResolvable | typing.List[GoogleDesignCenterApplicationComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>]

component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#component_parameters GoogleDesignCenterApplication#component_parameters}

---

##### `composite_application_parameters`<sup>Optional</sup> <a name="composite_application_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.compositeApplicationParameters"></a>

```python
composite_application_parameters: GoogleDesignCenterApplicationCompositeApplicationParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a>

composite_application_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#composite_application_parameters GoogleDesignCenterApplication#composite_application_parameters}

---

##### `connection_configs`<sup>Optional</sup> <a name="connection_configs" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.connectionConfigs"></a>

```python
connection_configs: IResolvable | typing.List[GoogleDesignCenterApplicationConnectionConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>]

connection_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#connection_configs GoogleDesignCenterApplication#connection_configs}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deletion_policy GoogleDesignCenterApplication#deletion_policy}

---

##### `deployment_project`<sup>Optional</sup> <a name="deployment_project" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentProject"></a>

```python
deployment_project: str
```

- *Type:* str

Deployment project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_project GoogleDesignCenterApplication#deployment_project}

---

##### `deployment_region`<sup>Optional</sup> <a name="deployment_region" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentRegion"></a>

```python
deployment_region: str
```

- *Type:* str

Deployment region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_region GoogleDesignCenterApplication#deployment_region}

---

##### `deployment_target`<sup>Optional</sup> <a name="deployment_target" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentTarget"></a>

```python
deployment_target: GoogleDesignCenterApplicationDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a>

deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_target GoogleDesignCenterApplication#deployment_target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#description GoogleDesignCenterApplication#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#id GoogleDesignCenterApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#project GoogleDesignCenterApplication#project}.

---

##### `roles_apis_config`<sup>Optional</sup> <a name="roles_apis_config" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.rolesApisConfig"></a>

```python
roles_apis_config: IResolvable | typing.List[GoogleDesignCenterApplicationRolesApisConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>]

roles_apis_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#roles_apis_config GoogleDesignCenterApplication#roles_apis_config}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Service account for deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#service_account GoogleDesignCenterApplication#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.timeouts"></a>

```python
timeouts: GoogleDesignCenterApplicationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#timeouts GoogleDesignCenterApplication#timeouts}

---

### GoogleDesignCenterApplicationConnectionConfigs <a name="GoogleDesignCenterApplicationConnectionConfigs" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs(
  connection_uri: str,
  destination_component_parameters: IResolvable | typing.List[GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters] = None,
  source_component_parameters: IResolvable | typing.List[GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.connectionUri">connection_uri</a></code> | <code>str</code> | The URI of the connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.destinationComponentParameters">destination_component_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>]</code> | destination_component_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.sourceComponentParameters">source_component_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>]</code> | source_component_parameters block. |

---

##### `connection_uri`<sup>Required</sup> <a name="connection_uri" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.connectionUri"></a>

```python
connection_uri: str
```

- *Type:* str

The URI of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#connection_uri GoogleDesignCenterApplication#connection_uri}

---

##### `destination_component_parameters`<sup>Optional</sup> <a name="destination_component_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.destinationComponentParameters"></a>

```python
destination_component_parameters: IResolvable | typing.List[GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>]

destination_component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#destination_component_parameters GoogleDesignCenterApplication#destination_component_parameters}

---

##### `source_component_parameters`<sup>Optional</sup> <a name="source_component_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.sourceComponentParameters"></a>

```python
source_component_parameters: IResolvable | typing.List[GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>]

source_component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#source_component_parameters GoogleDesignCenterApplication#source_component_parameters}

---

### GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters <a name="GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters(
  key: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.key">key</a></code> | <code>str</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.value">value</a></code> | <code>str</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#key GoogleDesignCenterApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#value GoogleDesignCenterApplication#value}

---

### GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters <a name="GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters(
  key: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters.property.key">key</a></code> | <code>str</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters.property.value">value</a></code> | <code>str</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#key GoogleDesignCenterApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#value GoogleDesignCenterApplication#value}

---

### GoogleDesignCenterApplicationDeploymentMetadata <a name="GoogleDesignCenterApplicationDeploymentMetadata" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadata.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadata()
```


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters()
```


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters()
```


### GoogleDesignCenterApplicationDeploymentMetadataError <a name="GoogleDesignCenterApplicationDeploymentMetadataError" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataError()
```


### GoogleDesignCenterApplicationDeploymentTarget <a name="GoogleDesignCenterApplicationDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget(
  gke_deployment_target: GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget.property.gkeDeploymentTarget">gke_deployment_target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | gke_deployment_target block. |

---

##### `gke_deployment_target`<sup>Optional</sup> <a name="gke_deployment_target" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget.property.gkeDeploymentTarget"></a>

```python
gke_deployment_target: GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

gke_deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#gke_deployment_target GoogleDesignCenterApplication#gke_deployment_target}

---

### GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget <a name="GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget(
  cluster_self_link: str,
  kubernetes_service_account: str,
  namespace: str,
  kubernetes_service_account_creation: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.clusterSelfLink">cluster_self_link</a></code> | <code>str</code> | The self link of the cluster where the GKE based application is deployed. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccount">kubernetes_service_account</a></code> | <code>str</code> | The Kubernetes service account in the namespace, such as 'default'. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.namespace">namespace</a></code> | <code>str</code> | The namespace where the application is deployed. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccountCreation">kubernetes_service_account_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to create the Kubernetes service account. |

---

##### `cluster_self_link`<sup>Required</sup> <a name="cluster_self_link" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.clusterSelfLink"></a>

```python
cluster_self_link: str
```

- *Type:* str

The self link of the cluster where the GKE based application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#cluster_self_link GoogleDesignCenterApplication#cluster_self_link}

---

##### `kubernetes_service_account`<sup>Required</sup> <a name="kubernetes_service_account" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccount"></a>

```python
kubernetes_service_account: str
```

- *Type:* str

The Kubernetes service account in the namespace, such as 'default'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#kubernetes_service_account GoogleDesignCenterApplication#kubernetes_service_account}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace where the application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#namespace GoogleDesignCenterApplication#namespace}

---

##### `kubernetes_service_account_creation`<sup>Optional</sup> <a name="kubernetes_service_account_creation" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccountCreation"></a>

```python
kubernetes_service_account_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to create the Kubernetes service account.

If 'true', the
service account is created in the namespace. If 'false', the
service account must already exist in the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#kubernetes_service_account_creation GoogleDesignCenterApplication#kubernetes_service_account_creation}

---

### GoogleDesignCenterApplicationRolesApisConfig <a name="GoogleDesignCenterApplicationRolesApisConfig" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig(
  project_id: str,
  apis: IResolvable | typing.List[GoogleDesignCenterApplicationRolesApisConfigApis] = None,
  roles: IResolvable | typing.List[GoogleDesignCenterApplicationRolesApisConfigRoles] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.projectId">project_id</a></code> | <code>str</code> | The project ID to which these configurations apply. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.apis">apis</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>]</code> | apis block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.roles">roles</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>]</code> | roles block. |

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The project ID to which these configurations apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#project_id GoogleDesignCenterApplication#project_id}

---

##### `apis`<sup>Optional</sup> <a name="apis" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.apis"></a>

```python
apis: IResolvable | typing.List[GoogleDesignCenterApplicationRolesApisConfigApis]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>]

apis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#apis GoogleDesignCenterApplication#apis}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.roles"></a>

```python
roles: IResolvable | typing.List[GoogleDesignCenterApplicationRolesApisConfigRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>]

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#roles GoogleDesignCenterApplication#roles}

---

### GoogleDesignCenterApplicationRolesApisConfigApis <a name="GoogleDesignCenterApplicationRolesApisConfigApis" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis(
  api: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis.property.api">api</a></code> | <code>str</code> | API name, such as 'compute.googleapis.com'. |

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis.property.api"></a>

```python
api: str
```

- *Type:* str

API name, such as 'compute.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#api GoogleDesignCenterApplication#api}

---

### GoogleDesignCenterApplicationRolesApisConfigRoles <a name="GoogleDesignCenterApplicationRolesApisConfigRoles" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles(
  role: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles.property.role">role</a></code> | <code>str</code> | IAM role name, such as 'roles/editor'. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles.property.role"></a>

```python
role: str
```

- *Type:* str

IAM role name, such as 'roles/editor'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#role GoogleDesignCenterApplication#role}

---

### GoogleDesignCenterApplicationScope <a name="GoogleDesignCenterApplicationScope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationScope(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope.property.type">type</a></code> | <code>str</code> | Scope type. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope.property.type"></a>

```python
type: str
```

- *Type:* str

Scope type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#type GoogleDesignCenterApplication#type}

---

### GoogleDesignCenterApplicationSource <a name="GoogleDesignCenterApplicationSource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationSource(
  application_template_revision: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource.property.applicationTemplateRevision">application_template_revision</a></code> | <code>str</code> | Application template revision URI. |

---

##### `application_template_revision`<sup>Optional</sup> <a name="application_template_revision" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource.property.applicationTemplateRevision"></a>

```python
application_template_revision: str
```

- *Type:* str

Application template revision URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#application_template_revision GoogleDesignCenterApplication#application_template_revision}

---

### GoogleDesignCenterApplicationTimeouts <a name="GoogleDesignCenterApplicationTimeouts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#create GoogleDesignCenterApplication#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#delete GoogleDesignCenterApplication#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#update GoogleDesignCenterApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#create GoogleDesignCenterApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#delete GoogleDesignCenterApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#update GoogleDesignCenterApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDesignCenterApplicationAppParametersList <a name="GoogleDesignCenterApplicationAppParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDesignCenterApplicationAppParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDesignCenterApplicationAppParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>]

---


### GoogleDesignCenterApplicationAppParametersOutputReference <a name="GoogleDesignCenterApplicationAppParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDesignCenterApplicationAppParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>

---


### GoogleDesignCenterApplicationAttributesBusinessOwnersList <a name="GoogleDesignCenterApplicationAttributesBusinessOwnersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesBusinessOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>]

---


### GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference <a name="GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDesignCenterApplicationAttributesBusinessOwners
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>

---


### GoogleDesignCenterApplicationAttributesCriticalityOutputReference <a name="GoogleDesignCenterApplicationAttributesCriticalityOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDesignCenterApplicationAttributesCriticality
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a>

---


### GoogleDesignCenterApplicationAttributesDeveloperOwnersList <a name="GoogleDesignCenterApplicationAttributesDeveloperOwnersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesDeveloperOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>]

---


### GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference <a name="GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDesignCenterApplicationAttributesDeveloperOwners
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>

---


### GoogleDesignCenterApplicationAttributesEnvironmentOutputReference <a name="GoogleDesignCenterApplicationAttributesEnvironmentOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDesignCenterApplicationAttributesEnvironment
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a>

---


### GoogleDesignCenterApplicationAttributesOperatorOwnersList <a name="GoogleDesignCenterApplicationAttributesOperatorOwnersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesOperatorOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>]

---


### GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference <a name="GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDesignCenterApplicationAttributesOperatorOwners
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>

---


### GoogleDesignCenterApplicationAttributesOutputReference <a name="GoogleDesignCenterApplicationAttributesOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putBusinessOwners">put_business_owners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putCriticality">put_criticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putDeveloperOwners">put_developer_owners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putEnvironment">put_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putOperatorOwners">put_operator_owners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetBusinessOwners">reset_business_owners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetCriticality">reset_criticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetDeveloperOwners">reset_developer_owners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetOperatorOwners">reset_operator_owners</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_business_owners` <a name="put_business_owners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putBusinessOwners"></a>

```python
def put_business_owners(
  value: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesBusinessOwners]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putBusinessOwners.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>]

---

##### `put_criticality` <a name="put_criticality" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putCriticality"></a>

```python
def put_criticality(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putCriticality.parameter.type"></a>

- *Type:* str

Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH', 'MEDIUM' and 'LOW'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#type GoogleDesignCenterApplication#type}

---

##### `put_developer_owners` <a name="put_developer_owners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putDeveloperOwners"></a>

```python
def put_developer_owners(
  value: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesDeveloperOwners]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putDeveloperOwners.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>]

---

##### `put_environment` <a name="put_environment" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putEnvironment"></a>

```python
def put_environment(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putEnvironment.parameter.type"></a>

- *Type:* str

Environment type. Possible values are 'PRODUCTION', 'STAGING', 'TEST' and 'DEVELOPMENT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#type GoogleDesignCenterApplication#type}

---

##### `put_operator_owners` <a name="put_operator_owners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putOperatorOwners"></a>

```python
def put_operator_owners(
  value: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesOperatorOwners]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putOperatorOwners.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>]

---

##### `reset_business_owners` <a name="reset_business_owners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetBusinessOwners"></a>

```python
def reset_business_owners() -> None
```

##### `reset_criticality` <a name="reset_criticality" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetCriticality"></a>

```python
def reset_criticality() -> None
```

##### `reset_developer_owners` <a name="reset_developer_owners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetDeveloperOwners"></a>

```python
def reset_developer_owners() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_operator_owners` <a name="reset_operator_owners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetOperatorOwners"></a>

```python
def reset_operator_owners() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.businessOwners">business_owners</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList">GoogleDesignCenterApplicationAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.criticality">criticality</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference">GoogleDesignCenterApplicationAttributesCriticalityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.developerOwners">developer_owners</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList">GoogleDesignCenterApplicationAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference">GoogleDesignCenterApplicationAttributesEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.operatorOwners">operator_owners</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList">GoogleDesignCenterApplicationAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.businessOwnersInput">business_owners_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.criticalityInput">criticality_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.developerOwnersInput">developer_owners_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.environmentInput">environment_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.operatorOwnersInput">operator_owners_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `business_owners`<sup>Required</sup> <a name="business_owners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.businessOwners"></a>

```python
business_owners: GoogleDesignCenterApplicationAttributesBusinessOwnersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList">GoogleDesignCenterApplicationAttributesBusinessOwnersList</a>

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.criticality"></a>

```python
criticality: GoogleDesignCenterApplicationAttributesCriticalityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference">GoogleDesignCenterApplicationAttributesCriticalityOutputReference</a>

---

##### `developer_owners`<sup>Required</sup> <a name="developer_owners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.developerOwners"></a>

```python
developer_owners: GoogleDesignCenterApplicationAttributesDeveloperOwnersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList">GoogleDesignCenterApplicationAttributesDeveloperOwnersList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.environment"></a>

```python
environment: GoogleDesignCenterApplicationAttributesEnvironmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference">GoogleDesignCenterApplicationAttributesEnvironmentOutputReference</a>

---

##### `operator_owners`<sup>Required</sup> <a name="operator_owners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.operatorOwners"></a>

```python
operator_owners: GoogleDesignCenterApplicationAttributesOperatorOwnersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList">GoogleDesignCenterApplicationAttributesOperatorOwnersList</a>

---

##### `business_owners_input`<sup>Optional</sup> <a name="business_owners_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.businessOwnersInput"></a>

```python
business_owners_input: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesBusinessOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>]

---

##### `criticality_input`<sup>Optional</sup> <a name="criticality_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.criticalityInput"></a>

```python
criticality_input: GoogleDesignCenterApplicationAttributesCriticality
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a>

---

##### `developer_owners_input`<sup>Optional</sup> <a name="developer_owners_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.developerOwnersInput"></a>

```python
developer_owners_input: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesDeveloperOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.environmentInput"></a>

```python
environment_input: GoogleDesignCenterApplicationAttributesEnvironment
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a>

---

##### `operator_owners_input`<sup>Optional</sup> <a name="operator_owners_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.operatorOwnersInput"></a>

```python
operator_owners_input: IResolvable | typing.List[GoogleDesignCenterApplicationAttributesOperatorOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDesignCenterApplicationAttributes
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a>

---


### GoogleDesignCenterApplicationComponentParametersList <a name="GoogleDesignCenterApplicationComponentParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDesignCenterApplicationComponentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDesignCenterApplicationComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>]

---


### GoogleDesignCenterApplicationComponentParametersOutputReference <a name="GoogleDesignCenterApplicationComponentParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[GoogleDesignCenterApplicationComponentParametersParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>]

---

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList">GoogleDesignCenterApplicationComponentParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.componentInput">component_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.component">component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.parameters"></a>

```python
parameters: GoogleDesignCenterApplicationComponentParametersParametersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList">GoogleDesignCenterApplicationComponentParametersParametersList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `component_input`<sup>Optional</sup> <a name="component_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.componentInput"></a>

```python
component_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[GoogleDesignCenterApplicationComponentParametersParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>]

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.component"></a>

```python
component: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDesignCenterApplicationComponentParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>

---


### GoogleDesignCenterApplicationComponentParametersParametersList <a name="GoogleDesignCenterApplicationComponentParametersParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDesignCenterApplicationComponentParametersParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDesignCenterApplicationComponentParametersParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>]

---


### GoogleDesignCenterApplicationComponentParametersParametersOutputReference <a name="GoogleDesignCenterApplicationComponentParametersParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDesignCenterApplicationComponentParametersParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>

---


### GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference <a name="GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.resetServiceAccountMap">reset_service_account_map</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_account_map` <a name="reset_service_account_map" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.resetServiceAccountMap"></a>

```python
def reset_service_account_map() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMapInput">service_account_map_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMap">service_account_map</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_account_map_input`<sup>Optional</sup> <a name="service_account_map_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMapInput"></a>

```python
service_account_map_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `service_account_map`<sup>Required</sup> <a name="service_account_map" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMap"></a>

```python
service_account_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDesignCenterApplicationCompositeApplicationParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a>

---


### GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList <a name="GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>]

---


### GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference <a name="GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>

---


### GoogleDesignCenterApplicationConnectionConfigsList <a name="GoogleDesignCenterApplicationConnectionConfigsList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDesignCenterApplicationConnectionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDesignCenterApplicationConnectionConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>]

---


### GoogleDesignCenterApplicationConnectionConfigsOutputReference <a name="GoogleDesignCenterApplicationConnectionConfigsOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters">put_destination_component_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters">put_source_component_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resetDestinationComponentParameters">reset_destination_component_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resetSourceComponentParameters">reset_source_component_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination_component_parameters` <a name="put_destination_component_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters"></a>

```python
def put_destination_component_parameters(
  value: IResolvable | typing.List[GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>]

---

##### `put_source_component_parameters` <a name="put_source_component_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters"></a>

```python
def put_source_component_parameters(
  value: IResolvable | typing.List[GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>]

---

##### `reset_destination_component_parameters` <a name="reset_destination_component_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resetDestinationComponentParameters"></a>

```python
def reset_destination_component_parameters() -> None
```

##### `reset_source_component_parameters` <a name="reset_source_component_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resetSourceComponentParameters"></a>

```python
def reset_source_component_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParameters">destination_component_parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParameters">source_component_parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.connectionUriInput">connection_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParametersInput">destination_component_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParametersInput">source_component_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.connectionUri">connection_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_component_parameters`<sup>Required</sup> <a name="destination_component_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParameters"></a>

```python
destination_component_parameters: GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList</a>

---

##### `source_component_parameters`<sup>Required</sup> <a name="source_component_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParameters"></a>

```python
source_component_parameters: GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList</a>

---

##### `connection_uri_input`<sup>Optional</sup> <a name="connection_uri_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.connectionUriInput"></a>

```python
connection_uri_input: str
```

- *Type:* str

---

##### `destination_component_parameters_input`<sup>Optional</sup> <a name="destination_component_parameters_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParametersInput"></a>

```python
destination_component_parameters_input: IResolvable | typing.List[GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>]

---

##### `source_component_parameters_input`<sup>Optional</sup> <a name="source_component_parameters_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParametersInput"></a>

```python
source_component_parameters_input: IResolvable | typing.List[GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>]

---

##### `connection_uri`<sup>Required</sup> <a name="connection_uri" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.connectionUri"></a>

```python
connection_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDesignCenterApplicationConnectionConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>

---


### GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList <a name="GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>]

---


### GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference <a name="GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>

---


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.component">component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.component"></a>

```python
component: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.parameters"></a>

```python
parameters: GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters</a>

---


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters</a>

---


### GoogleDesignCenterApplicationDeploymentMetadataErrorList <a name="GoogleDesignCenterApplicationDeploymentMetadataErrorList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference <a name="GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.detail">detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataError">GoogleDesignCenterApplicationDeploymentMetadataError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.detail"></a>

```python
detail: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDesignCenterApplicationDeploymentMetadataError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataError">GoogleDesignCenterApplicationDeploymentMetadataError</a>

---


### GoogleDesignCenterApplicationDeploymentMetadataList <a name="GoogleDesignCenterApplicationDeploymentMetadataList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDesignCenterApplicationDeploymentMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDesignCenterApplicationDeploymentMetadataOutputReference <a name="GoogleDesignCenterApplicationDeploymentMetadataOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.buildAttribute">build_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.componentOutputParameters">component_output_parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList">GoogleDesignCenterApplicationDeploymentMetadataErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.retryAttempts">retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.workerPool">worker_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadata">GoogleDesignCenterApplicationDeploymentMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `build_attribute`<sup>Required</sup> <a name="build_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.buildAttribute"></a>

```python
build_attribute: str
```

- *Type:* str

---

##### `component_output_parameters`<sup>Required</sup> <a name="component_output_parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.componentOutputParameters"></a>

```python
component_output_parameters: GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.error"></a>

```python
error: GoogleDesignCenterApplicationDeploymentMetadataErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList">GoogleDesignCenterApplicationDeploymentMetadataErrorList</a>

---

##### `retry_attempts`<sup>Required</sup> <a name="retry_attempts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.retryAttempts"></a>

```python
retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `worker_pool`<sup>Required</sup> <a name="worker_pool" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.workerPool"></a>

```python
worker_pool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDesignCenterApplicationDeploymentMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadata">GoogleDesignCenterApplicationDeploymentMetadata</a>

---


### GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference <a name="GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resetKubernetesServiceAccountCreation">reset_kubernetes_service_account_creation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kubernetes_service_account_creation` <a name="reset_kubernetes_service_account_creation" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resetKubernetesServiceAccountCreation"></a>

```python
def reset_kubernetes_service_account_creation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLinkInput">cluster_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreationInput">kubernetes_service_account_creation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountInput">kubernetes_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLink">cluster_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccount">kubernetes_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreation">kubernetes_service_account_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_self_link_input`<sup>Optional</sup> <a name="cluster_self_link_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLinkInput"></a>

```python
cluster_self_link_input: str
```

- *Type:* str

---

##### `kubernetes_service_account_creation_input`<sup>Optional</sup> <a name="kubernetes_service_account_creation_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreationInput"></a>

```python
kubernetes_service_account_creation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kubernetes_service_account_input`<sup>Optional</sup> <a name="kubernetes_service_account_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountInput"></a>

```python
kubernetes_service_account_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `cluster_self_link`<sup>Required</sup> <a name="cluster_self_link" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLink"></a>

```python
cluster_self_link: str
```

- *Type:* str

---

##### `kubernetes_service_account`<sup>Required</sup> <a name="kubernetes_service_account" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccount"></a>

```python
kubernetes_service_account: str
```

- *Type:* str

---

##### `kubernetes_service_account_creation`<sup>Required</sup> <a name="kubernetes_service_account_creation" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreation"></a>

```python
kubernetes_service_account_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---


### GoogleDesignCenterApplicationDeploymentTargetOutputReference <a name="GoogleDesignCenterApplicationDeploymentTargetOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget">put_gke_deployment_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.resetGkeDeploymentTarget">reset_gke_deployment_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gke_deployment_target` <a name="put_gke_deployment_target" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget"></a>

```python
def put_gke_deployment_target(
  cluster_self_link: str,
  kubernetes_service_account: str,
  namespace: str,
  kubernetes_service_account_creation: bool | IResolvable = None
) -> None
```

###### `cluster_self_link`<sup>Required</sup> <a name="cluster_self_link" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget.parameter.clusterSelfLink"></a>

- *Type:* str

The self link of the cluster where the GKE based application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#cluster_self_link GoogleDesignCenterApplication#cluster_self_link}

---

###### `kubernetes_service_account`<sup>Required</sup> <a name="kubernetes_service_account" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget.parameter.kubernetesServiceAccount"></a>

- *Type:* str

The Kubernetes service account in the namespace, such as 'default'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#kubernetes_service_account GoogleDesignCenterApplication#kubernetes_service_account}

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget.parameter.namespace"></a>

- *Type:* str

The namespace where the application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#namespace GoogleDesignCenterApplication#namespace}

---

###### `kubernetes_service_account_creation`<sup>Optional</sup> <a name="kubernetes_service_account_creation" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget.parameter.kubernetesServiceAccountCreation"></a>

- *Type:* bool | cdktn.IResolvable

Whether to create the Kubernetes service account.

If 'true', the
service account is created in the namespace. If 'false', the
service account must already exist in the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#kubernetes_service_account_creation GoogleDesignCenterApplication#kubernetes_service_account_creation}

---

##### `reset_gke_deployment_target` <a name="reset_gke_deployment_target" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.resetGkeDeploymentTarget"></a>

```python
def reset_gke_deployment_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTarget">gke_deployment_target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTargetInput">gke_deployment_target_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gke_deployment_target`<sup>Required</sup> <a name="gke_deployment_target" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTarget"></a>

```python
gke_deployment_target: GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference</a>

---

##### `gke_deployment_target_input`<sup>Optional</sup> <a name="gke_deployment_target_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTargetInput"></a>

```python
gke_deployment_target_input: GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDesignCenterApplicationDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a>

---


### GoogleDesignCenterApplicationRolesApisConfigApisList <a name="GoogleDesignCenterApplicationRolesApisConfigApisList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDesignCenterApplicationRolesApisConfigApisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDesignCenterApplicationRolesApisConfigApis]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>]

---


### GoogleDesignCenterApplicationRolesApisConfigApisOutputReference <a name="GoogleDesignCenterApplicationRolesApisConfigApisOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.systemProvided">system_provided</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.apiInput">api_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.api">api</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `system_provided`<sup>Required</sup> <a name="system_provided" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.systemProvided"></a>

```python
system_provided: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `api_input`<sup>Optional</sup> <a name="api_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.apiInput"></a>

```python
api_input: str
```

- *Type:* str

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.api"></a>

```python
api: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDesignCenterApplicationRolesApisConfigApis
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>

---


### GoogleDesignCenterApplicationRolesApisConfigList <a name="GoogleDesignCenterApplicationRolesApisConfigList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDesignCenterApplicationRolesApisConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDesignCenterApplicationRolesApisConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>]

---


### GoogleDesignCenterApplicationRolesApisConfigOutputReference <a name="GoogleDesignCenterApplicationRolesApisConfigOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putApis">put_apis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putRoles">put_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resetApis">reset_apis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resetRoles">reset_roles</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_apis` <a name="put_apis" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putApis"></a>

```python
def put_apis(
  value: IResolvable | typing.List[GoogleDesignCenterApplicationRolesApisConfigApis]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putApis.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>]

---

##### `put_roles` <a name="put_roles" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putRoles"></a>

```python
def put_roles(
  value: IResolvable | typing.List[GoogleDesignCenterApplicationRolesApisConfigRoles]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>]

---

##### `reset_apis` <a name="reset_apis" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resetApis"></a>

```python
def reset_apis() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resetRoles"></a>

```python
def reset_roles() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.apis">apis</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList">GoogleDesignCenterApplicationRolesApisConfigApisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.roles">roles</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList">GoogleDesignCenterApplicationRolesApisConfigRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.apisInput">apis_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.rolesInput">roles_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apis`<sup>Required</sup> <a name="apis" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.apis"></a>

```python
apis: GoogleDesignCenterApplicationRolesApisConfigApisList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList">GoogleDesignCenterApplicationRolesApisConfigApisList</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.roles"></a>

```python
roles: GoogleDesignCenterApplicationRolesApisConfigRolesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList">GoogleDesignCenterApplicationRolesApisConfigRolesList</a>

---

##### `apis_input`<sup>Optional</sup> <a name="apis_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.apisInput"></a>

```python
apis_input: IResolvable | typing.List[GoogleDesignCenterApplicationRolesApisConfigApis]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.rolesInput"></a>

```python
roles_input: IResolvable | typing.List[GoogleDesignCenterApplicationRolesApisConfigRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDesignCenterApplicationRolesApisConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>

---


### GoogleDesignCenterApplicationRolesApisConfigRolesList <a name="GoogleDesignCenterApplicationRolesApisConfigRolesList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDesignCenterApplicationRolesApisConfigRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>]

---


### GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference <a name="GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.systemProvided">system_provided</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `system_provided`<sup>Required</sup> <a name="system_provided" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.systemProvided"></a>

```python
system_provided: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDesignCenterApplicationRolesApisConfigRoles
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>

---


### GoogleDesignCenterApplicationScopeOutputReference <a name="GoogleDesignCenterApplicationScopeOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDesignCenterApplicationScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a>

---


### GoogleDesignCenterApplicationSourceOutputReference <a name="GoogleDesignCenterApplicationSourceOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.resetApplicationTemplateRevision">reset_application_template_revision</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_template_revision` <a name="reset_application_template_revision" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.resetApplicationTemplateRevision"></a>

```python
def reset_application_template_revision() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.applicationTemplateRevisionInput">application_template_revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.applicationTemplateRevision">application_template_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_template_revision_input`<sup>Optional</sup> <a name="application_template_revision_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.applicationTemplateRevisionInput"></a>

```python
application_template_revision_input: str
```

- *Type:* str

---

##### `application_template_revision`<sup>Required</sup> <a name="application_template_revision" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.applicationTemplateRevision"></a>

```python
application_template_revision: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDesignCenterApplicationSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a>

---


### GoogleDesignCenterApplicationTimeoutsOutputReference <a name="GoogleDesignCenterApplicationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_design_center_application

googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDesignCenterApplicationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a>

---



