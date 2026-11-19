# `googleDesignCenterApplication` Submodule <a name="`googleDesignCenterApplication` Submodule" id="@cdktn/provider-google-beta.googleDesignCenterApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDesignCenterApplication <a name="GoogleDesignCenterApplication" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application google_design_center_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplication;

GoogleDesignCenterApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .location(java.lang.String)
    .scope(GoogleDesignCenterApplicationScope)
    .source(GoogleDesignCenterApplicationSource)
    .space(java.lang.String)
//  .appParameters(IResolvable|java.util.List<GoogleDesignCenterApplicationAppParameters>)
//  .attributes(GoogleDesignCenterApplicationAttributes)
//  .componentParameters(IResolvable|java.util.List<GoogleDesignCenterApplicationComponentParameters>)
//  .compositeApplicationParameters(GoogleDesignCenterApplicationCompositeApplicationParameters)
//  .connectionConfigs(IResolvable|java.util.List<GoogleDesignCenterApplicationConnectionConfigs>)
//  .deletionPolicy(java.lang.String)
//  .deploymentProject(java.lang.String)
//  .deploymentRegion(java.lang.String)
//  .deploymentTarget(GoogleDesignCenterApplicationDeploymentTarget)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .rolesApisConfig(IResolvable|java.util.List<GoogleDesignCenterApplicationRolesApisConfig>)
//  .serviceAccount(java.lang.String)
//  .timeouts(GoogleDesignCenterApplicationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The ID of the application. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the space. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.space">space</a></code> | <code>java.lang.String</code> | The space for the application. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.appParameters">appParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>></code> | app_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a></code> | attributes block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.componentParameters">componentParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>></code> | component_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.compositeApplicationParameters">compositeApplicationParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a></code> | composite_application_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.connectionConfigs">connectionConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>></code> | connection_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.deploymentProject">deploymentProject</a></code> | <code>java.lang.String</code> | Deployment project. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.deploymentRegion">deploymentRegion</a></code> | <code>java.lang.String</code> | Deployment region. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.deploymentTarget">deploymentTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a></code> | deployment_target block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the application. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#id GoogleDesignCenterApplication#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#project GoogleDesignCenterApplication#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.rolesApisConfig">rolesApisConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>></code> | roles_apis_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Service account for deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

The ID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#application_id GoogleDesignCenterApplication#application_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.location"></a>

- *Type:* java.lang.String

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

- *Type:* java.lang.String

The space for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#space GoogleDesignCenterApplication#space}

---

##### `appParameters`<sup>Optional</sup> <a name="appParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.appParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>>

app_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#app_parameters GoogleDesignCenterApplication#app_parameters}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.attributes"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#attributes GoogleDesignCenterApplication#attributes}

---

##### `componentParameters`<sup>Optional</sup> <a name="componentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.componentParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>>

component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#component_parameters GoogleDesignCenterApplication#component_parameters}

---

##### `compositeApplicationParameters`<sup>Optional</sup> <a name="compositeApplicationParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.compositeApplicationParameters"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a>

composite_application_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#composite_application_parameters GoogleDesignCenterApplication#composite_application_parameters}

---

##### `connectionConfigs`<sup>Optional</sup> <a name="connectionConfigs" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.connectionConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>>

connection_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#connection_configs GoogleDesignCenterApplication#connection_configs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deletion_policy GoogleDesignCenterApplication#deletion_policy}

---

##### `deploymentProject`<sup>Optional</sup> <a name="deploymentProject" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.deploymentProject"></a>

- *Type:* java.lang.String

Deployment project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_project GoogleDesignCenterApplication#deployment_project}

---

##### `deploymentRegion`<sup>Optional</sup> <a name="deploymentRegion" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.deploymentRegion"></a>

- *Type:* java.lang.String

Deployment region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_region GoogleDesignCenterApplication#deployment_region}

---

##### `deploymentTarget`<sup>Optional</sup> <a name="deploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.deploymentTarget"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a>

deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_target GoogleDesignCenterApplication#deployment_target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#description GoogleDesignCenterApplication#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#id GoogleDesignCenterApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#project GoogleDesignCenterApplication#project}.

---

##### `rolesApisConfig`<sup>Optional</sup> <a name="rolesApisConfig" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.rolesApisConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>>

roles_apis_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#roles_apis_config GoogleDesignCenterApplication#roles_apis_config}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

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
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAppParameters">putAppParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putComponentParameters">putComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putCompositeApplicationParameters">putCompositeApplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putConnectionConfigs">putConnectionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putDeploymentTarget">putDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putRolesApisConfig">putRolesApisConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetAppParameters">resetAppParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetComponentParameters">resetComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetCompositeApplicationParameters">resetCompositeApplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetConnectionConfigs">resetConnectionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentProject">resetDeploymentProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentRegion">resetDeploymentRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentTarget">resetDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetRolesApisConfig">resetRolesApisConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppParameters` <a name="putAppParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAppParameters"></a>

```java
public void putAppParameters(IResolvable|java.util.List<GoogleDesignCenterApplicationAppParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAppParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>>

---

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAttributes"></a>

```java
public void putAttributes(GoogleDesignCenterApplicationAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a>

---

##### `putComponentParameters` <a name="putComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putComponentParameters"></a>

```java
public void putComponentParameters(IResolvable|java.util.List<GoogleDesignCenterApplicationComponentParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putComponentParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>>

---

##### `putCompositeApplicationParameters` <a name="putCompositeApplicationParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putCompositeApplicationParameters"></a>

```java
public void putCompositeApplicationParameters(GoogleDesignCenterApplicationCompositeApplicationParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putCompositeApplicationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a>

---

##### `putConnectionConfigs` <a name="putConnectionConfigs" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putConnectionConfigs"></a>

```java
public void putConnectionConfigs(IResolvable|java.util.List<GoogleDesignCenterApplicationConnectionConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putConnectionConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>>

---

##### `putDeploymentTarget` <a name="putDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putDeploymentTarget"></a>

```java
public void putDeploymentTarget(GoogleDesignCenterApplicationDeploymentTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putDeploymentTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a>

---

##### `putRolesApisConfig` <a name="putRolesApisConfig" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putRolesApisConfig"></a>

```java
public void putRolesApisConfig(IResolvable|java.util.List<GoogleDesignCenterApplicationRolesApisConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putRolesApisConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>>

---

##### `putScope` <a name="putScope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putScope"></a>

```java
public void putScope(GoogleDesignCenterApplicationScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putSource"></a>

```java
public void putSource(GoogleDesignCenterApplicationSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putTimeouts"></a>

```java
public void putTimeouts(GoogleDesignCenterApplicationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a>

---

##### `resetAppParameters` <a name="resetAppParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetAppParameters"></a>

```java
public void resetAppParameters()
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetComponentParameters` <a name="resetComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetComponentParameters"></a>

```java
public void resetComponentParameters()
```

##### `resetCompositeApplicationParameters` <a name="resetCompositeApplicationParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetCompositeApplicationParameters"></a>

```java
public void resetCompositeApplicationParameters()
```

##### `resetConnectionConfigs` <a name="resetConnectionConfigs" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetConnectionConfigs"></a>

```java
public void resetConnectionConfigs()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDeploymentProject` <a name="resetDeploymentProject" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentProject"></a>

```java
public void resetDeploymentProject()
```

##### `resetDeploymentRegion` <a name="resetDeploymentRegion" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentRegion"></a>

```java
public void resetDeploymentRegion()
```

##### `resetDeploymentTarget` <a name="resetDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentTarget"></a>

```java
public void resetDeploymentTarget()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetProject"></a>

```java
public void resetProject()
```

##### `resetRolesApisConfig` <a name="resetRolesApisConfig" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetRolesApisConfig"></a>

```java
public void resetRolesApisConfig()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDesignCenterApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplication;

GoogleDesignCenterApplication.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplication;

GoogleDesignCenterApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplication;

GoogleDesignCenterApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplication;

GoogleDesignCenterApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDesignCenterApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDesignCenterApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDesignCenterApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDesignCenterApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDesignCenterApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.apphubApplication">apphubApplication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.appParameters">appParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList">GoogleDesignCenterApplicationAppParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference">GoogleDesignCenterApplicationAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.componentParameters">componentParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList">GoogleDesignCenterApplicationComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.compositeApplicationParameters">compositeApplicationParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference">GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connectionConfigs">connectionConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList">GoogleDesignCenterApplicationConnectionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentMetadata">deploymentMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList">GoogleDesignCenterApplicationDeploymentMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentTarget">deploymentTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference">GoogleDesignCenterApplicationDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.rolesApisConfig">rolesApisConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList">GoogleDesignCenterApplicationRolesApisConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference">GoogleDesignCenterApplicationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.source">source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference">GoogleDesignCenterApplicationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference">GoogleDesignCenterApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.appParametersInput">appParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.attributesInput">attributesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.componentParametersInput">componentParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.compositeApplicationParametersInput">compositeApplicationParametersInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connectionConfigsInput">connectionConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentProjectInput">deploymentProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentRegionInput">deploymentRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentTargetInput">deploymentTargetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.rolesApisConfigInput">rolesApisConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.scopeInput">scopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.spaceInput">spaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentProject">deploymentProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentRegion">deploymentRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.space">space</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apphubApplication`<sup>Required</sup> <a name="apphubApplication" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.apphubApplication"></a>

```java
public java.lang.String getApphubApplication();
```

- *Type:* java.lang.String

---

##### `appParameters`<sup>Required</sup> <a name="appParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.appParameters"></a>

```java
public GoogleDesignCenterApplicationAppParametersList getAppParameters();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList">GoogleDesignCenterApplicationAppParametersList</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.attributes"></a>

```java
public GoogleDesignCenterApplicationAttributesOutputReference getAttributes();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference">GoogleDesignCenterApplicationAttributesOutputReference</a>

---

##### `componentParameters`<sup>Required</sup> <a name="componentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.componentParameters"></a>

```java
public GoogleDesignCenterApplicationComponentParametersList getComponentParameters();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList">GoogleDesignCenterApplicationComponentParametersList</a>

---

##### `compositeApplicationParameters`<sup>Required</sup> <a name="compositeApplicationParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.compositeApplicationParameters"></a>

```java
public GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference getCompositeApplicationParameters();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference">GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference</a>

---

##### `connectionConfigs`<sup>Required</sup> <a name="connectionConfigs" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connectionConfigs"></a>

```java
public GoogleDesignCenterApplicationConnectionConfigsList getConnectionConfigs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList">GoogleDesignCenterApplicationConnectionConfigsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deploymentMetadata`<sup>Required</sup> <a name="deploymentMetadata" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentMetadata"></a>

```java
public GoogleDesignCenterApplicationDeploymentMetadataList getDeploymentMetadata();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList">GoogleDesignCenterApplicationDeploymentMetadataList</a>

---

##### `deploymentTarget`<sup>Required</sup> <a name="deploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentTarget"></a>

```java
public GoogleDesignCenterApplicationDeploymentTargetOutputReference getDeploymentTarget();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference">GoogleDesignCenterApplicationDeploymentTargetOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rolesApisConfig`<sup>Required</sup> <a name="rolesApisConfig" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.rolesApisConfig"></a>

```java
public GoogleDesignCenterApplicationRolesApisConfigList getRolesApisConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList">GoogleDesignCenterApplicationRolesApisConfigList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.scope"></a>

```java
public GoogleDesignCenterApplicationScopeOutputReference getScope();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference">GoogleDesignCenterApplicationScopeOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.source"></a>

```java
public GoogleDesignCenterApplicationSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference">GoogleDesignCenterApplicationSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.timeouts"></a>

```java
public GoogleDesignCenterApplicationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference">GoogleDesignCenterApplicationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `appParametersInput`<sup>Optional</sup> <a name="appParametersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.appParametersInput"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationAppParameters> getAppParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.attributesInput"></a>

```java
public GoogleDesignCenterApplicationAttributes getAttributesInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a>

---

##### `componentParametersInput`<sup>Optional</sup> <a name="componentParametersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.componentParametersInput"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationComponentParameters> getComponentParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>>

---

##### `compositeApplicationParametersInput`<sup>Optional</sup> <a name="compositeApplicationParametersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.compositeApplicationParametersInput"></a>

```java
public GoogleDesignCenterApplicationCompositeApplicationParameters getCompositeApplicationParametersInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a>

---

##### `connectionConfigsInput`<sup>Optional</sup> <a name="connectionConfigsInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connectionConfigsInput"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationConnectionConfigs> getConnectionConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `deploymentProjectInput`<sup>Optional</sup> <a name="deploymentProjectInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentProjectInput"></a>

```java
public java.lang.String getDeploymentProjectInput();
```

- *Type:* java.lang.String

---

##### `deploymentRegionInput`<sup>Optional</sup> <a name="deploymentRegionInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentRegionInput"></a>

```java
public java.lang.String getDeploymentRegionInput();
```

- *Type:* java.lang.String

---

##### `deploymentTargetInput`<sup>Optional</sup> <a name="deploymentTargetInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentTargetInput"></a>

```java
public GoogleDesignCenterApplicationDeploymentTarget getDeploymentTargetInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rolesApisConfigInput`<sup>Optional</sup> <a name="rolesApisConfigInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.rolesApisConfigInput"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationRolesApisConfig> getRolesApisConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.scopeInput"></a>

```java
public GoogleDesignCenterApplicationScope getScopeInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.sourceInput"></a>

```java
public GoogleDesignCenterApplicationSource getSourceInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a>

---

##### `spaceInput`<sup>Optional</sup> <a name="spaceInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.spaceInput"></a>

```java
public java.lang.String getSpaceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDesignCenterApplicationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `deploymentProject`<sup>Required</sup> <a name="deploymentProject" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentProject"></a>

```java
public java.lang.String getDeploymentProject();
```

- *Type:* java.lang.String

---

##### `deploymentRegion`<sup>Required</sup> <a name="deploymentRegion" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentRegion"></a>

```java
public java.lang.String getDeploymentRegion();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.space"></a>

```java
public java.lang.String getSpace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDesignCenterApplicationAppParameters <a name="GoogleDesignCenterApplicationAppParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAppParameters;

GoogleDesignCenterApplicationAppParameters.builder()
    .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters.property.key">key</a></code> | <code>java.lang.String</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters.property.value">value</a></code> | <code>java.lang.String</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#key GoogleDesignCenterApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#value GoogleDesignCenterApplication#value}

---

### GoogleDesignCenterApplicationAttributes <a name="GoogleDesignCenterApplicationAttributes" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAttributes;

GoogleDesignCenterApplicationAttributes.builder()
//  .businessOwners(IResolvable|java.util.List<GoogleDesignCenterApplicationAttributesBusinessOwners>)
//  .criticality(GoogleDesignCenterApplicationAttributesCriticality)
//  .developerOwners(IResolvable|java.util.List<GoogleDesignCenterApplicationAttributesDeveloperOwners>)
//  .environment(GoogleDesignCenterApplicationAttributesEnvironment)
//  .operatorOwners(IResolvable|java.util.List<GoogleDesignCenterApplicationAttributesOperatorOwners>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.businessOwners">businessOwners</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>></code> | business_owners block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.criticality">criticality</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a></code> | criticality block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.developerOwners">developerOwners</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>></code> | developer_owners block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a></code> | environment block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.operatorOwners">operatorOwners</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>></code> | operator_owners block. |

---

##### `businessOwners`<sup>Optional</sup> <a name="businessOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.businessOwners"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationAttributesBusinessOwners> getBusinessOwners();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>>

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#business_owners GoogleDesignCenterApplication#business_owners}

---

##### `criticality`<sup>Optional</sup> <a name="criticality" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.criticality"></a>

```java
public GoogleDesignCenterApplicationAttributesCriticality getCriticality();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#criticality GoogleDesignCenterApplication#criticality}

---

##### `developerOwners`<sup>Optional</sup> <a name="developerOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.developerOwners"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationAttributesDeveloperOwners> getDeveloperOwners();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>>

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#developer_owners GoogleDesignCenterApplication#developer_owners}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.environment"></a>

```java
public GoogleDesignCenterApplicationAttributesEnvironment getEnvironment();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#environment GoogleDesignCenterApplication#environment}

---

##### `operatorOwners`<sup>Optional</sup> <a name="operatorOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.operatorOwners"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationAttributesOperatorOwners> getOperatorOwners();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>>

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#operator_owners GoogleDesignCenterApplication#operator_owners}

---

### GoogleDesignCenterApplicationAttributesBusinessOwners <a name="GoogleDesignCenterApplicationAttributesBusinessOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAttributesBusinessOwners;

GoogleDesignCenterApplicationAttributesBusinessOwners.builder()
    .email(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners.property.email">email</a></code> | <code>java.lang.String</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#email GoogleDesignCenterApplication#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}

---

### GoogleDesignCenterApplicationAttributesCriticality <a name="GoogleDesignCenterApplicationAttributesCriticality" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAttributesCriticality;

GoogleDesignCenterApplicationAttributesCriticality.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality.property.type">type</a></code> | <code>java.lang.String</code> | Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH', 'MEDIUM' and 'LOW'. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH', 'MEDIUM' and 'LOW'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#type GoogleDesignCenterApplication#type}

---

### GoogleDesignCenterApplicationAttributesDeveloperOwners <a name="GoogleDesignCenterApplicationAttributesDeveloperOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAttributesDeveloperOwners;

GoogleDesignCenterApplicationAttributesDeveloperOwners.builder()
    .email(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners.property.email">email</a></code> | <code>java.lang.String</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#email GoogleDesignCenterApplication#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}

---

### GoogleDesignCenterApplicationAttributesEnvironment <a name="GoogleDesignCenterApplicationAttributesEnvironment" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAttributesEnvironment;

GoogleDesignCenterApplicationAttributesEnvironment.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment.property.type">type</a></code> | <code>java.lang.String</code> | Environment type. Possible values are 'PRODUCTION', 'STAGING', 'TEST' and 'DEVELOPMENT'. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Environment type. Possible values are 'PRODUCTION', 'STAGING', 'TEST' and 'DEVELOPMENT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#type GoogleDesignCenterApplication#type}

---

### GoogleDesignCenterApplicationAttributesOperatorOwners <a name="GoogleDesignCenterApplicationAttributesOperatorOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAttributesOperatorOwners;

GoogleDesignCenterApplicationAttributesOperatorOwners.builder()
    .email(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners.property.email">email</a></code> | <code>java.lang.String</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#email GoogleDesignCenterApplication#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}

---

### GoogleDesignCenterApplicationComponentParameters <a name="GoogleDesignCenterApplicationComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationComponentParameters;

GoogleDesignCenterApplicationComponentParameters.builder()
    .component(java.lang.String)
//  .parameters(IResolvable|java.util.List<GoogleDesignCenterApplicationComponentParametersParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters.property.component">component</a></code> | <code>java.lang.String</code> | The URI of the component that the parameters belong to. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>></code> | parameters block. |

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters.property.component"></a>

```java
public java.lang.String getComponent();
```

- *Type:* java.lang.String

The URI of the component that the parameters belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#component GoogleDesignCenterApplication#component}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters.property.parameters"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationComponentParametersParameters> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#parameters GoogleDesignCenterApplication#parameters}

---

### GoogleDesignCenterApplicationComponentParametersParameters <a name="GoogleDesignCenterApplicationComponentParametersParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationComponentParametersParameters;

GoogleDesignCenterApplicationComponentParametersParameters.builder()
    .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters.property.key">key</a></code> | <code>java.lang.String</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters.property.value">value</a></code> | <code>java.lang.String</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#key GoogleDesignCenterApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#value GoogleDesignCenterApplication#value}

---

### GoogleDesignCenterApplicationCompositeApplicationParameters <a name="GoogleDesignCenterApplicationCompositeApplicationParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationCompositeApplicationParameters;

GoogleDesignCenterApplicationCompositeApplicationParameters.builder()
//  .serviceAccountMap(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters.property.serviceAccountMap">serviceAccountMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map from a component URI to the service account that deploys the component. |

---

##### `serviceAccountMap`<sup>Optional</sup> <a name="serviceAccountMap" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters.property.serviceAccountMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceAccountMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map from a component URI to the service account that deploys the component.

Keys use the format
'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/components/{component}'
and values use the format
'projects/{project}/serviceAccounts/{email_address}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#service_account_map GoogleDesignCenterApplication#service_account_map}

---

### GoogleDesignCenterApplicationConfig <a name="GoogleDesignCenterApplicationConfig" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationConfig;

GoogleDesignCenterApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .location(java.lang.String)
    .scope(GoogleDesignCenterApplicationScope)
    .source(GoogleDesignCenterApplicationSource)
    .space(java.lang.String)
//  .appParameters(IResolvable|java.util.List<GoogleDesignCenterApplicationAppParameters>)
//  .attributes(GoogleDesignCenterApplicationAttributes)
//  .componentParameters(IResolvable|java.util.List<GoogleDesignCenterApplicationComponentParameters>)
//  .compositeApplicationParameters(GoogleDesignCenterApplicationCompositeApplicationParameters)
//  .connectionConfigs(IResolvable|java.util.List<GoogleDesignCenterApplicationConnectionConfigs>)
//  .deletionPolicy(java.lang.String)
//  .deploymentProject(java.lang.String)
//  .deploymentRegion(java.lang.String)
//  .deploymentTarget(GoogleDesignCenterApplicationDeploymentTarget)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .rolesApisConfig(IResolvable|java.util.List<GoogleDesignCenterApplicationRolesApisConfig>)
//  .serviceAccount(java.lang.String)
//  .timeouts(GoogleDesignCenterApplicationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The ID of the application. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the space. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.space">space</a></code> | <code>java.lang.String</code> | The space for the application. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.appParameters">appParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>></code> | app_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a></code> | attributes block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.componentParameters">componentParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>></code> | component_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.compositeApplicationParameters">compositeApplicationParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a></code> | composite_application_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.connectionConfigs">connectionConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>></code> | connection_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentProject">deploymentProject</a></code> | <code>java.lang.String</code> | Deployment project. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentRegion">deploymentRegion</a></code> | <code>java.lang.String</code> | Deployment region. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentTarget">deploymentTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a></code> | deployment_target block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the application. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#id GoogleDesignCenterApplication#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#project GoogleDesignCenterApplication#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.rolesApisConfig">rolesApisConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>></code> | roles_apis_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Service account for deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

The ID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#application_id GoogleDesignCenterApplication#application_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#location GoogleDesignCenterApplication#location}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.scope"></a>

```java
public GoogleDesignCenterApplicationScope getScope();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#scope GoogleDesignCenterApplication#scope}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.source"></a>

```java
public GoogleDesignCenterApplicationSource getSource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#source GoogleDesignCenterApplication#source}

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.space"></a>

```java
public java.lang.String getSpace();
```

- *Type:* java.lang.String

The space for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#space GoogleDesignCenterApplication#space}

---

##### `appParameters`<sup>Optional</sup> <a name="appParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.appParameters"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationAppParameters> getAppParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>>

app_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#app_parameters GoogleDesignCenterApplication#app_parameters}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.attributes"></a>

```java
public GoogleDesignCenterApplicationAttributes getAttributes();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#attributes GoogleDesignCenterApplication#attributes}

---

##### `componentParameters`<sup>Optional</sup> <a name="componentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.componentParameters"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationComponentParameters> getComponentParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>>

component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#component_parameters GoogleDesignCenterApplication#component_parameters}

---

##### `compositeApplicationParameters`<sup>Optional</sup> <a name="compositeApplicationParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.compositeApplicationParameters"></a>

```java
public GoogleDesignCenterApplicationCompositeApplicationParameters getCompositeApplicationParameters();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a>

composite_application_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#composite_application_parameters GoogleDesignCenterApplication#composite_application_parameters}

---

##### `connectionConfigs`<sup>Optional</sup> <a name="connectionConfigs" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.connectionConfigs"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationConnectionConfigs> getConnectionConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>>

connection_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#connection_configs GoogleDesignCenterApplication#connection_configs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deletion_policy GoogleDesignCenterApplication#deletion_policy}

---

##### `deploymentProject`<sup>Optional</sup> <a name="deploymentProject" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentProject"></a>

```java
public java.lang.String getDeploymentProject();
```

- *Type:* java.lang.String

Deployment project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_project GoogleDesignCenterApplication#deployment_project}

---

##### `deploymentRegion`<sup>Optional</sup> <a name="deploymentRegion" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentRegion"></a>

```java
public java.lang.String getDeploymentRegion();
```

- *Type:* java.lang.String

Deployment region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_region GoogleDesignCenterApplication#deployment_region}

---

##### `deploymentTarget`<sup>Optional</sup> <a name="deploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentTarget"></a>

```java
public GoogleDesignCenterApplicationDeploymentTarget getDeploymentTarget();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a>

deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_target GoogleDesignCenterApplication#deployment_target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#description GoogleDesignCenterApplication#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#id GoogleDesignCenterApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#project GoogleDesignCenterApplication#project}.

---

##### `rolesApisConfig`<sup>Optional</sup> <a name="rolesApisConfig" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.rolesApisConfig"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationRolesApisConfig> getRolesApisConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>>

roles_apis_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#roles_apis_config GoogleDesignCenterApplication#roles_apis_config}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Service account for deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#service_account GoogleDesignCenterApplication#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.timeouts"></a>

```java
public GoogleDesignCenterApplicationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#timeouts GoogleDesignCenterApplication#timeouts}

---

### GoogleDesignCenterApplicationConnectionConfigs <a name="GoogleDesignCenterApplicationConnectionConfigs" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationConnectionConfigs;

GoogleDesignCenterApplicationConnectionConfigs.builder()
    .connectionUri(java.lang.String)
//  .destinationComponentParameters(IResolvable|java.util.List<GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters>)
//  .sourceComponentParameters(IResolvable|java.util.List<GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.connectionUri">connectionUri</a></code> | <code>java.lang.String</code> | The URI of the connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.destinationComponentParameters">destinationComponentParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>></code> | destination_component_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.sourceComponentParameters">sourceComponentParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>></code> | source_component_parameters block. |

---

##### `connectionUri`<sup>Required</sup> <a name="connectionUri" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.connectionUri"></a>

```java
public java.lang.String getConnectionUri();
```

- *Type:* java.lang.String

The URI of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#connection_uri GoogleDesignCenterApplication#connection_uri}

---

##### `destinationComponentParameters`<sup>Optional</sup> <a name="destinationComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.destinationComponentParameters"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters> getDestinationComponentParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>>

destination_component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#destination_component_parameters GoogleDesignCenterApplication#destination_component_parameters}

---

##### `sourceComponentParameters`<sup>Optional</sup> <a name="sourceComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.sourceComponentParameters"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters> getSourceComponentParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>>

source_component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#source_component_parameters GoogleDesignCenterApplication#source_component_parameters}

---

### GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters <a name="GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters;

GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters.builder()
    .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.key">key</a></code> | <code>java.lang.String</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.value">value</a></code> | <code>java.lang.String</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#key GoogleDesignCenterApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#value GoogleDesignCenterApplication#value}

---

### GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters <a name="GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters;

GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters.builder()
    .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters.property.key">key</a></code> | <code>java.lang.String</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters.property.value">value</a></code> | <code>java.lang.String</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#key GoogleDesignCenterApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#value GoogleDesignCenterApplication#value}

---

### GoogleDesignCenterApplicationDeploymentMetadata <a name="GoogleDesignCenterApplicationDeploymentMetadata" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadata.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationDeploymentMetadata;

GoogleDesignCenterApplicationDeploymentMetadata.builder()
    .build();
```


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters;

GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters.builder()
    .build();
```


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters;

GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters.builder()
    .build();
```


### GoogleDesignCenterApplicationDeploymentMetadataError <a name="GoogleDesignCenterApplicationDeploymentMetadataError" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataError.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationDeploymentMetadataError;

GoogleDesignCenterApplicationDeploymentMetadataError.builder()
    .build();
```


### GoogleDesignCenterApplicationDeploymentTarget <a name="GoogleDesignCenterApplicationDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationDeploymentTarget;

GoogleDesignCenterApplicationDeploymentTarget.builder()
//  .gkeDeploymentTarget(GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget.property.gkeDeploymentTarget">gkeDeploymentTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | gke_deployment_target block. |

---

##### `gkeDeploymentTarget`<sup>Optional</sup> <a name="gkeDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget.property.gkeDeploymentTarget"></a>

```java
public GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget getGkeDeploymentTarget();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

gke_deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#gke_deployment_target GoogleDesignCenterApplication#gke_deployment_target}

---

### GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget <a name="GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget;

GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.builder()
    .clusterSelfLink(java.lang.String)
    .kubernetesServiceAccount(java.lang.String)
    .namespace(java.lang.String)
//  .kubernetesServiceAccountCreation(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.clusterSelfLink">clusterSelfLink</a></code> | <code>java.lang.String</code> | The self link of the cluster where the GKE based application is deployed. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccount">kubernetesServiceAccount</a></code> | <code>java.lang.String</code> | The Kubernetes service account in the namespace, such as 'default'. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace where the application is deployed. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccountCreation">kubernetesServiceAccountCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to create the Kubernetes service account. |

---

##### `clusterSelfLink`<sup>Required</sup> <a name="clusterSelfLink" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.clusterSelfLink"></a>

```java
public java.lang.String getClusterSelfLink();
```

- *Type:* java.lang.String

The self link of the cluster where the GKE based application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#cluster_self_link GoogleDesignCenterApplication#cluster_self_link}

---

##### `kubernetesServiceAccount`<sup>Required</sup> <a name="kubernetesServiceAccount" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccount"></a>

```java
public java.lang.String getKubernetesServiceAccount();
```

- *Type:* java.lang.String

The Kubernetes service account in the namespace, such as 'default'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#kubernetes_service_account GoogleDesignCenterApplication#kubernetes_service_account}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace where the application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#namespace GoogleDesignCenterApplication#namespace}

---

##### `kubernetesServiceAccountCreation`<sup>Optional</sup> <a name="kubernetesServiceAccountCreation" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccountCreation"></a>

```java
public java.lang.Boolean|IResolvable getKubernetesServiceAccountCreation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to create the Kubernetes service account.

If 'true', the
service account is created in the namespace. If 'false', the
service account must already exist in the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#kubernetes_service_account_creation GoogleDesignCenterApplication#kubernetes_service_account_creation}

---

### GoogleDesignCenterApplicationRolesApisConfig <a name="GoogleDesignCenterApplicationRolesApisConfig" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationRolesApisConfig;

GoogleDesignCenterApplicationRolesApisConfig.builder()
    .projectId(java.lang.String)
//  .apis(IResolvable|java.util.List<GoogleDesignCenterApplicationRolesApisConfigApis>)
//  .roles(IResolvable|java.util.List<GoogleDesignCenterApplicationRolesApisConfigRoles>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The project ID to which these configurations apply. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.apis">apis</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>></code> | apis block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.roles">roles</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>></code> | roles block. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The project ID to which these configurations apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#project_id GoogleDesignCenterApplication#project_id}

---

##### `apis`<sup>Optional</sup> <a name="apis" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.apis"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationRolesApisConfigApis> getApis();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>>

apis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#apis GoogleDesignCenterApplication#apis}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.roles"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationRolesApisConfigRoles> getRoles();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#roles GoogleDesignCenterApplication#roles}

---

### GoogleDesignCenterApplicationRolesApisConfigApis <a name="GoogleDesignCenterApplicationRolesApisConfigApis" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationRolesApisConfigApis;

GoogleDesignCenterApplicationRolesApisConfigApis.builder()
    .api(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis.property.api">api</a></code> | <code>java.lang.String</code> | API name, such as 'compute.googleapis.com'. |

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

API name, such as 'compute.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#api GoogleDesignCenterApplication#api}

---

### GoogleDesignCenterApplicationRolesApisConfigRoles <a name="GoogleDesignCenterApplicationRolesApisConfigRoles" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationRolesApisConfigRoles;

GoogleDesignCenterApplicationRolesApisConfigRoles.builder()
    .role(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles.property.role">role</a></code> | <code>java.lang.String</code> | IAM role name, such as 'roles/editor'. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

IAM role name, such as 'roles/editor'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#role GoogleDesignCenterApplication#role}

---

### GoogleDesignCenterApplicationScope <a name="GoogleDesignCenterApplicationScope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationScope;

GoogleDesignCenterApplicationScope.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope.property.type">type</a></code> | <code>java.lang.String</code> | Scope type. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Scope type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#type GoogleDesignCenterApplication#type}

---

### GoogleDesignCenterApplicationSource <a name="GoogleDesignCenterApplicationSource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationSource;

GoogleDesignCenterApplicationSource.builder()
//  .applicationTemplateRevision(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource.property.applicationTemplateRevision">applicationTemplateRevision</a></code> | <code>java.lang.String</code> | Application template revision URI. |

---

##### `applicationTemplateRevision`<sup>Optional</sup> <a name="applicationTemplateRevision" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource.property.applicationTemplateRevision"></a>

```java
public java.lang.String getApplicationTemplateRevision();
```

- *Type:* java.lang.String

Application template revision URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#application_template_revision GoogleDesignCenterApplication#application_template_revision}

---

### GoogleDesignCenterApplicationTimeouts <a name="GoogleDesignCenterApplicationTimeouts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationTimeouts;

GoogleDesignCenterApplicationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#create GoogleDesignCenterApplication#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#delete GoogleDesignCenterApplication#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#update GoogleDesignCenterApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#create GoogleDesignCenterApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#delete GoogleDesignCenterApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#update GoogleDesignCenterApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDesignCenterApplicationAppParametersList <a name="GoogleDesignCenterApplicationAppParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAppParametersList;

new GoogleDesignCenterApplicationAppParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.get"></a>

```java
public GoogleDesignCenterApplicationAppParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationAppParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>>

---


### GoogleDesignCenterApplicationAppParametersOutputReference <a name="GoogleDesignCenterApplicationAppParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAppParametersOutputReference;

new GoogleDesignCenterApplicationAppParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDesignCenterApplicationAppParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>

---


### GoogleDesignCenterApplicationAttributesBusinessOwnersList <a name="GoogleDesignCenterApplicationAttributesBusinessOwnersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAttributesBusinessOwnersList;

new GoogleDesignCenterApplicationAttributesBusinessOwnersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.get"></a>

```java
public GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationAttributesBusinessOwners> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>>

---


### GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference <a name="GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference;

new GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDesignCenterApplicationAttributesBusinessOwners getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>

---


### GoogleDesignCenterApplicationAttributesCriticalityOutputReference <a name="GoogleDesignCenterApplicationAttributesCriticalityOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAttributesCriticalityOutputReference;

new GoogleDesignCenterApplicationAttributesCriticalityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.internalValue"></a>

```java
public GoogleDesignCenterApplicationAttributesCriticality getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a>

---


### GoogleDesignCenterApplicationAttributesDeveloperOwnersList <a name="GoogleDesignCenterApplicationAttributesDeveloperOwnersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAttributesDeveloperOwnersList;

new GoogleDesignCenterApplicationAttributesDeveloperOwnersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.get"></a>

```java
public GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationAttributesDeveloperOwners> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>>

---


### GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference <a name="GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference;

new GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDesignCenterApplicationAttributesDeveloperOwners getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>

---


### GoogleDesignCenterApplicationAttributesEnvironmentOutputReference <a name="GoogleDesignCenterApplicationAttributesEnvironmentOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference;

new GoogleDesignCenterApplicationAttributesEnvironmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.internalValue"></a>

```java
public GoogleDesignCenterApplicationAttributesEnvironment getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a>

---


### GoogleDesignCenterApplicationAttributesOperatorOwnersList <a name="GoogleDesignCenterApplicationAttributesOperatorOwnersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAttributesOperatorOwnersList;

new GoogleDesignCenterApplicationAttributesOperatorOwnersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.get"></a>

```java
public GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationAttributesOperatorOwners> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>>

---


### GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference <a name="GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference;

new GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDesignCenterApplicationAttributesOperatorOwners getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>

---


### GoogleDesignCenterApplicationAttributesOutputReference <a name="GoogleDesignCenterApplicationAttributesOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationAttributesOutputReference;

new GoogleDesignCenterApplicationAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putBusinessOwners">putBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putCriticality">putCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putDeveloperOwners">putDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putOperatorOwners">putOperatorOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetBusinessOwners">resetBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetCriticality">resetCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetDeveloperOwners">resetDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetOperatorOwners">resetOperatorOwners</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBusinessOwners` <a name="putBusinessOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putBusinessOwners"></a>

```java
public void putBusinessOwners(IResolvable|java.util.List<GoogleDesignCenterApplicationAttributesBusinessOwners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putBusinessOwners.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>>

---

##### `putCriticality` <a name="putCriticality" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putCriticality"></a>

```java
public void putCriticality(GoogleDesignCenterApplicationAttributesCriticality value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putCriticality.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a>

---

##### `putDeveloperOwners` <a name="putDeveloperOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putDeveloperOwners"></a>

```java
public void putDeveloperOwners(IResolvable|java.util.List<GoogleDesignCenterApplicationAttributesDeveloperOwners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putDeveloperOwners.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>>

---

##### `putEnvironment` <a name="putEnvironment" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putEnvironment"></a>

```java
public void putEnvironment(GoogleDesignCenterApplicationAttributesEnvironment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a>

---

##### `putOperatorOwners` <a name="putOperatorOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putOperatorOwners"></a>

```java
public void putOperatorOwners(IResolvable|java.util.List<GoogleDesignCenterApplicationAttributesOperatorOwners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putOperatorOwners.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>>

---

##### `resetBusinessOwners` <a name="resetBusinessOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetBusinessOwners"></a>

```java
public void resetBusinessOwners()
```

##### `resetCriticality` <a name="resetCriticality" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetCriticality"></a>

```java
public void resetCriticality()
```

##### `resetDeveloperOwners` <a name="resetDeveloperOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetDeveloperOwners"></a>

```java
public void resetDeveloperOwners()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetOperatorOwners` <a name="resetOperatorOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetOperatorOwners"></a>

```java
public void resetOperatorOwners()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.businessOwners">businessOwners</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList">GoogleDesignCenterApplicationAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.criticality">criticality</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference">GoogleDesignCenterApplicationAttributesCriticalityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.developerOwners">developerOwners</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList">GoogleDesignCenterApplicationAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference">GoogleDesignCenterApplicationAttributesEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.operatorOwners">operatorOwners</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList">GoogleDesignCenterApplicationAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.businessOwnersInput">businessOwnersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.criticalityInput">criticalityInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.developerOwnersInput">developerOwnersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.environmentInput">environmentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.operatorOwnersInput">operatorOwnersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `businessOwners`<sup>Required</sup> <a name="businessOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.businessOwners"></a>

```java
public GoogleDesignCenterApplicationAttributesBusinessOwnersList getBusinessOwners();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList">GoogleDesignCenterApplicationAttributesBusinessOwnersList</a>

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.criticality"></a>

```java
public GoogleDesignCenterApplicationAttributesCriticalityOutputReference getCriticality();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference">GoogleDesignCenterApplicationAttributesCriticalityOutputReference</a>

---

##### `developerOwners`<sup>Required</sup> <a name="developerOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.developerOwners"></a>

```java
public GoogleDesignCenterApplicationAttributesDeveloperOwnersList getDeveloperOwners();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList">GoogleDesignCenterApplicationAttributesDeveloperOwnersList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.environment"></a>

```java
public GoogleDesignCenterApplicationAttributesEnvironmentOutputReference getEnvironment();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference">GoogleDesignCenterApplicationAttributesEnvironmentOutputReference</a>

---

##### `operatorOwners`<sup>Required</sup> <a name="operatorOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.operatorOwners"></a>

```java
public GoogleDesignCenterApplicationAttributesOperatorOwnersList getOperatorOwners();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList">GoogleDesignCenterApplicationAttributesOperatorOwnersList</a>

---

##### `businessOwnersInput`<sup>Optional</sup> <a name="businessOwnersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.businessOwnersInput"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationAttributesBusinessOwners> getBusinessOwnersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>>

---

##### `criticalityInput`<sup>Optional</sup> <a name="criticalityInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.criticalityInput"></a>

```java
public GoogleDesignCenterApplicationAttributesCriticality getCriticalityInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a>

---

##### `developerOwnersInput`<sup>Optional</sup> <a name="developerOwnersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.developerOwnersInput"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationAttributesDeveloperOwners> getDeveloperOwnersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.environmentInput"></a>

```java
public GoogleDesignCenterApplicationAttributesEnvironment getEnvironmentInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a>

---

##### `operatorOwnersInput`<sup>Optional</sup> <a name="operatorOwnersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.operatorOwnersInput"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationAttributesOperatorOwners> getOperatorOwnersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.internalValue"></a>

```java
public GoogleDesignCenterApplicationAttributes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a>

---


### GoogleDesignCenterApplicationComponentParametersList <a name="GoogleDesignCenterApplicationComponentParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationComponentParametersList;

new GoogleDesignCenterApplicationComponentParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.get"></a>

```java
public GoogleDesignCenterApplicationComponentParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationComponentParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>>

---


### GoogleDesignCenterApplicationComponentParametersOutputReference <a name="GoogleDesignCenterApplicationComponentParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationComponentParametersOutputReference;

new GoogleDesignCenterApplicationComponentParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.putParameters"></a>

```java
public void putParameters(IResolvable|java.util.List<GoogleDesignCenterApplicationComponentParametersParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.putParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>>

---

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList">GoogleDesignCenterApplicationComponentParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.componentInput">componentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.component">component</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.parameters"></a>

```java
public GoogleDesignCenterApplicationComponentParametersParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList">GoogleDesignCenterApplicationComponentParametersParametersList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `componentInput`<sup>Optional</sup> <a name="componentInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.componentInput"></a>

```java
public java.lang.String getComponentInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.parametersInput"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationComponentParametersParameters> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>>

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.component"></a>

```java
public java.lang.String getComponent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDesignCenterApplicationComponentParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>

---


### GoogleDesignCenterApplicationComponentParametersParametersList <a name="GoogleDesignCenterApplicationComponentParametersParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationComponentParametersParametersList;

new GoogleDesignCenterApplicationComponentParametersParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.get"></a>

```java
public GoogleDesignCenterApplicationComponentParametersParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationComponentParametersParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>>

---


### GoogleDesignCenterApplicationComponentParametersParametersOutputReference <a name="GoogleDesignCenterApplicationComponentParametersParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationComponentParametersParametersOutputReference;

new GoogleDesignCenterApplicationComponentParametersParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDesignCenterApplicationComponentParametersParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>

---


### GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference <a name="GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference;

new GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.resetServiceAccountMap">resetServiceAccountMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAccountMap` <a name="resetServiceAccountMap" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.resetServiceAccountMap"></a>

```java
public void resetServiceAccountMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMapInput">serviceAccountMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMap">serviceAccountMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceAccountMapInput`<sup>Optional</sup> <a name="serviceAccountMapInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceAccountMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serviceAccountMap`<sup>Required</sup> <a name="serviceAccountMap" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceAccountMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.internalValue"></a>

```java
public GoogleDesignCenterApplicationCompositeApplicationParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a>

---


### GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList <a name="GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList;

new GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get"></a>

```java
public GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>>

---


### GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference <a name="GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference;

new GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>

---


### GoogleDesignCenterApplicationConnectionConfigsList <a name="GoogleDesignCenterApplicationConnectionConfigsList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationConnectionConfigsList;

new GoogleDesignCenterApplicationConnectionConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.get"></a>

```java
public GoogleDesignCenterApplicationConnectionConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationConnectionConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>>

---


### GoogleDesignCenterApplicationConnectionConfigsOutputReference <a name="GoogleDesignCenterApplicationConnectionConfigsOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationConnectionConfigsOutputReference;

new GoogleDesignCenterApplicationConnectionConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters">putDestinationComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters">putSourceComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resetDestinationComponentParameters">resetDestinationComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resetSourceComponentParameters">resetSourceComponentParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationComponentParameters` <a name="putDestinationComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters"></a>

```java
public void putDestinationComponentParameters(IResolvable|java.util.List<GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>>

---

##### `putSourceComponentParameters` <a name="putSourceComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters"></a>

```java
public void putSourceComponentParameters(IResolvable|java.util.List<GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>>

---

##### `resetDestinationComponentParameters` <a name="resetDestinationComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resetDestinationComponentParameters"></a>

```java
public void resetDestinationComponentParameters()
```

##### `resetSourceComponentParameters` <a name="resetSourceComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resetSourceComponentParameters"></a>

```java
public void resetSourceComponentParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParameters">destinationComponentParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParameters">sourceComponentParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.connectionUriInput">connectionUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParametersInput">destinationComponentParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParametersInput">sourceComponentParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.connectionUri">connectionUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationComponentParameters`<sup>Required</sup> <a name="destinationComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParameters"></a>

```java
public GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList getDestinationComponentParameters();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList</a>

---

##### `sourceComponentParameters`<sup>Required</sup> <a name="sourceComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParameters"></a>

```java
public GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList getSourceComponentParameters();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList</a>

---

##### `connectionUriInput`<sup>Optional</sup> <a name="connectionUriInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.connectionUriInput"></a>

```java
public java.lang.String getConnectionUriInput();
```

- *Type:* java.lang.String

---

##### `destinationComponentParametersInput`<sup>Optional</sup> <a name="destinationComponentParametersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParametersInput"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters> getDestinationComponentParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>>

---

##### `sourceComponentParametersInput`<sup>Optional</sup> <a name="sourceComponentParametersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParametersInput"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters> getSourceComponentParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>>

---

##### `connectionUri`<sup>Required</sup> <a name="connectionUri" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.connectionUri"></a>

```java
public java.lang.String getConnectionUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDesignCenterApplicationConnectionConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>

---


### GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList <a name="GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList;

new GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.get"></a>

```java
public GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>>

---


### GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference <a name="GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference;

new GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>

---


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList;

new GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get"></a>

```java
public GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference;

new GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.component">component</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.component"></a>

```java
public java.lang.String getComponent();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.parameters"></a>

```java
public GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.internalValue"></a>

```java
public GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters</a>

---


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList;

new GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get"></a>

```java
public GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference;

new GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.internalValue"></a>

```java
public GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters</a>

---


### GoogleDesignCenterApplicationDeploymentMetadataErrorList <a name="GoogleDesignCenterApplicationDeploymentMetadataErrorList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationDeploymentMetadataErrorList;

new GoogleDesignCenterApplicationDeploymentMetadataErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.get"></a>

```java
public GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference <a name="GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference;

new GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.detail">detail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataError">GoogleDesignCenterApplicationDeploymentMetadataError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.detail"></a>

```java
public java.lang.String getDetail();
```

- *Type:* java.lang.String

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.internalValue"></a>

```java
public GoogleDesignCenterApplicationDeploymentMetadataError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataError">GoogleDesignCenterApplicationDeploymentMetadataError</a>

---


### GoogleDesignCenterApplicationDeploymentMetadataList <a name="GoogleDesignCenterApplicationDeploymentMetadataList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationDeploymentMetadataList;

new GoogleDesignCenterApplicationDeploymentMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.get"></a>

```java
public GoogleDesignCenterApplicationDeploymentMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDesignCenterApplicationDeploymentMetadataOutputReference <a name="GoogleDesignCenterApplicationDeploymentMetadataOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationDeploymentMetadataOutputReference;

new GoogleDesignCenterApplicationDeploymentMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.buildAttribute">buildAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.componentOutputParameters">componentOutputParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList">GoogleDesignCenterApplicationDeploymentMetadataErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.retryAttempts">retryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.workerPool">workerPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadata">GoogleDesignCenterApplicationDeploymentMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.buildAttribute"></a>

```java
public java.lang.String getBuildAttribute();
```

- *Type:* java.lang.String

---

##### `componentOutputParameters`<sup>Required</sup> <a name="componentOutputParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.componentOutputParameters"></a>

```java
public GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList getComponentOutputParameters();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.error"></a>

```java
public GoogleDesignCenterApplicationDeploymentMetadataErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList">GoogleDesignCenterApplicationDeploymentMetadataErrorList</a>

---

##### `retryAttempts`<sup>Required</sup> <a name="retryAttempts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.retryAttempts"></a>

```java
public java.lang.Number getRetryAttempts();
```

- *Type:* java.lang.Number

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.workerPool"></a>

```java
public java.lang.String getWorkerPool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.internalValue"></a>

```java
public GoogleDesignCenterApplicationDeploymentMetadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadata">GoogleDesignCenterApplicationDeploymentMetadata</a>

---


### GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference <a name="GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference;

new GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resetKubernetesServiceAccountCreation">resetKubernetesServiceAccountCreation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKubernetesServiceAccountCreation` <a name="resetKubernetesServiceAccountCreation" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resetKubernetesServiceAccountCreation"></a>

```java
public void resetKubernetesServiceAccountCreation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLinkInput">clusterSelfLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreationInput">kubernetesServiceAccountCreationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountInput">kubernetesServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLink">clusterSelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccount">kubernetesServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreation">kubernetesServiceAccountCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterSelfLinkInput`<sup>Optional</sup> <a name="clusterSelfLinkInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLinkInput"></a>

```java
public java.lang.String getClusterSelfLinkInput();
```

- *Type:* java.lang.String

---

##### `kubernetesServiceAccountCreationInput`<sup>Optional</sup> <a name="kubernetesServiceAccountCreationInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreationInput"></a>

```java
public java.lang.Boolean|IResolvable getKubernetesServiceAccountCreationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kubernetesServiceAccountInput`<sup>Optional</sup> <a name="kubernetesServiceAccountInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountInput"></a>

```java
public java.lang.String getKubernetesServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `clusterSelfLink`<sup>Required</sup> <a name="clusterSelfLink" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLink"></a>

```java
public java.lang.String getClusterSelfLink();
```

- *Type:* java.lang.String

---

##### `kubernetesServiceAccount`<sup>Required</sup> <a name="kubernetesServiceAccount" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccount"></a>

```java
public java.lang.String getKubernetesServiceAccount();
```

- *Type:* java.lang.String

---

##### `kubernetesServiceAccountCreation`<sup>Required</sup> <a name="kubernetesServiceAccountCreation" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreation"></a>

```java
public java.lang.Boolean|IResolvable getKubernetesServiceAccountCreation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.internalValue"></a>

```java
public GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---


### GoogleDesignCenterApplicationDeploymentTargetOutputReference <a name="GoogleDesignCenterApplicationDeploymentTargetOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationDeploymentTargetOutputReference;

new GoogleDesignCenterApplicationDeploymentTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget">putGkeDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.resetGkeDeploymentTarget">resetGkeDeploymentTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGkeDeploymentTarget` <a name="putGkeDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget"></a>

```java
public void putGkeDeploymentTarget(GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---

##### `resetGkeDeploymentTarget` <a name="resetGkeDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.resetGkeDeploymentTarget"></a>

```java
public void resetGkeDeploymentTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTarget">gkeDeploymentTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTargetInput">gkeDeploymentTargetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gkeDeploymentTarget`<sup>Required</sup> <a name="gkeDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTarget"></a>

```java
public GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference getGkeDeploymentTarget();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference</a>

---

##### `gkeDeploymentTargetInput`<sup>Optional</sup> <a name="gkeDeploymentTargetInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTargetInput"></a>

```java
public GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget getGkeDeploymentTargetInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.internalValue"></a>

```java
public GoogleDesignCenterApplicationDeploymentTarget getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a>

---


### GoogleDesignCenterApplicationRolesApisConfigApisList <a name="GoogleDesignCenterApplicationRolesApisConfigApisList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationRolesApisConfigApisList;

new GoogleDesignCenterApplicationRolesApisConfigApisList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.get"></a>

```java
public GoogleDesignCenterApplicationRolesApisConfigApisOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationRolesApisConfigApis> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>>

---


### GoogleDesignCenterApplicationRolesApisConfigApisOutputReference <a name="GoogleDesignCenterApplicationRolesApisConfigApisOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference;

new GoogleDesignCenterApplicationRolesApisConfigApisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.systemProvided">systemProvided</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.apiInput">apiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.api">api</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `systemProvided`<sup>Required</sup> <a name="systemProvided" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.systemProvided"></a>

```java
public IResolvable getSystemProvided();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `apiInput`<sup>Optional</sup> <a name="apiInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.apiInput"></a>

```java
public java.lang.String getApiInput();
```

- *Type:* java.lang.String

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDesignCenterApplicationRolesApisConfigApis getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>

---


### GoogleDesignCenterApplicationRolesApisConfigList <a name="GoogleDesignCenterApplicationRolesApisConfigList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationRolesApisConfigList;

new GoogleDesignCenterApplicationRolesApisConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.get"></a>

```java
public GoogleDesignCenterApplicationRolesApisConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationRolesApisConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>>

---


### GoogleDesignCenterApplicationRolesApisConfigOutputReference <a name="GoogleDesignCenterApplicationRolesApisConfigOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationRolesApisConfigOutputReference;

new GoogleDesignCenterApplicationRolesApisConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putApis">putApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putRoles">putRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resetApis">resetApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resetRoles">resetRoles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApis` <a name="putApis" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putApis"></a>

```java
public void putApis(IResolvable|java.util.List<GoogleDesignCenterApplicationRolesApisConfigApis> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putApis.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>>

---

##### `putRoles` <a name="putRoles" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putRoles"></a>

```java
public void putRoles(IResolvable|java.util.List<GoogleDesignCenterApplicationRolesApisConfigRoles> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putRoles.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>>

---

##### `resetApis` <a name="resetApis" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resetApis"></a>

```java
public void resetApis()
```

##### `resetRoles` <a name="resetRoles" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resetRoles"></a>

```java
public void resetRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.apis">apis</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList">GoogleDesignCenterApplicationRolesApisConfigApisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.roles">roles</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList">GoogleDesignCenterApplicationRolesApisConfigRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.apisInput">apisInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.rolesInput">rolesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apis`<sup>Required</sup> <a name="apis" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.apis"></a>

```java
public GoogleDesignCenterApplicationRolesApisConfigApisList getApis();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList">GoogleDesignCenterApplicationRolesApisConfigApisList</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.roles"></a>

```java
public GoogleDesignCenterApplicationRolesApisConfigRolesList getRoles();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList">GoogleDesignCenterApplicationRolesApisConfigRolesList</a>

---

##### `apisInput`<sup>Optional</sup> <a name="apisInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.apisInput"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationRolesApisConfigApis> getApisInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.rolesInput"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationRolesApisConfigRoles> getRolesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDesignCenterApplicationRolesApisConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>

---


### GoogleDesignCenterApplicationRolesApisConfigRolesList <a name="GoogleDesignCenterApplicationRolesApisConfigRolesList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationRolesApisConfigRolesList;

new GoogleDesignCenterApplicationRolesApisConfigRolesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.get"></a>

```java
public GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDesignCenterApplicationRolesApisConfigRoles> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>>

---


### GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference <a name="GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference;

new GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.systemProvided">systemProvided</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `systemProvided`<sup>Required</sup> <a name="systemProvided" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.systemProvided"></a>

```java
public IResolvable getSystemProvided();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDesignCenterApplicationRolesApisConfigRoles getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>

---


### GoogleDesignCenterApplicationScopeOutputReference <a name="GoogleDesignCenterApplicationScopeOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationScopeOutputReference;

new GoogleDesignCenterApplicationScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.internalValue"></a>

```java
public GoogleDesignCenterApplicationScope getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a>

---


### GoogleDesignCenterApplicationSourceOutputReference <a name="GoogleDesignCenterApplicationSourceOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationSourceOutputReference;

new GoogleDesignCenterApplicationSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.resetApplicationTemplateRevision">resetApplicationTemplateRevision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationTemplateRevision` <a name="resetApplicationTemplateRevision" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.resetApplicationTemplateRevision"></a>

```java
public void resetApplicationTemplateRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.applicationTemplateRevisionInput">applicationTemplateRevisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.applicationTemplateRevision">applicationTemplateRevision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationTemplateRevisionInput`<sup>Optional</sup> <a name="applicationTemplateRevisionInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.applicationTemplateRevisionInput"></a>

```java
public java.lang.String getApplicationTemplateRevisionInput();
```

- *Type:* java.lang.String

---

##### `applicationTemplateRevision`<sup>Required</sup> <a name="applicationTemplateRevision" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.applicationTemplateRevision"></a>

```java
public java.lang.String getApplicationTemplateRevision();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.internalValue"></a>

```java
public GoogleDesignCenterApplicationSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a>

---


### GoogleDesignCenterApplicationTimeoutsOutputReference <a name="GoogleDesignCenterApplicationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_design_center_application.GoogleDesignCenterApplicationTimeoutsOutputReference;

new GoogleDesignCenterApplicationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDesignCenterApplicationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a>

---



