# `googleCloudSecurityComplianceFrameworkDeployment` Submodule <a name="`googleCloudSecurityComplianceFrameworkDeployment` Submodule" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudSecurityComplianceFrameworkDeployment <a name="GoogleCloudSecurityComplianceFrameworkDeployment" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment google_cloud_security_compliance_framework_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeployment;

GoogleCloudSecurityComplianceFrameworkDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudControlMetadata(IResolvable|java.util.List<GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata>)
    .framework(GoogleCloudSecurityComplianceFrameworkDeploymentFramework)
    .frameworkDeploymentId(java.lang.String)
    .location(java.lang.String)
    .organization(java.lang.String)
    .targetResourceConfig(GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.cloudControlMetadata">cloudControlMetadata</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>></code> | cloud_control_metadata block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.framework">framework</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a></code> | framework block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.frameworkDeploymentId">frameworkDeploymentId</a></code> | <code>java.lang.String</code> | User provided identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.targetResourceConfig">targetResourceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a></code> | target_resource_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User provided description of the Framework deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#id GoogleCloudSecurityComplianceFrameworkDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudControlMetadata`<sup>Required</sup> <a name="cloudControlMetadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.cloudControlMetadata"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>>

cloud_control_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#cloud_control_metadata GoogleCloudSecurityComplianceFrameworkDeployment#cloud_control_metadata}

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.framework"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a>

framework block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#framework GoogleCloudSecurityComplianceFrameworkDeployment#framework}

---

##### `frameworkDeploymentId`<sup>Required</sup> <a name="frameworkDeploymentId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.frameworkDeploymentId"></a>

- *Type:* java.lang.String

User provided identifier.

It should be unique in scope of a parent.
This is optional and if not provided, a random UUID will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#framework_deployment_id GoogleCloudSecurityComplianceFrameworkDeployment#framework_deployment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#location GoogleCloudSecurityComplianceFrameworkDeployment#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#organization GoogleCloudSecurityComplianceFrameworkDeployment#organization}

---

##### `targetResourceConfig`<sup>Required</sup> <a name="targetResourceConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.targetResourceConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a>

target_resource_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#target_resource_config GoogleCloudSecurityComplianceFrameworkDeployment#target_resource_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#deletion_policy GoogleCloudSecurityComplianceFrameworkDeployment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User provided description of the Framework deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#description GoogleCloudSecurityComplianceFrameworkDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#id GoogleCloudSecurityComplianceFrameworkDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#timeouts GoogleCloudSecurityComplianceFrameworkDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putCloudControlMetadata">putCloudControlMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putFramework">putFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTargetResourceConfig">putTargetResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudControlMetadata` <a name="putCloudControlMetadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putCloudControlMetadata"></a>

```java
public void putCloudControlMetadata(IResolvable|java.util.List<GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putCloudControlMetadata.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>>

---

##### `putFramework` <a name="putFramework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putFramework"></a>

```java
public void putFramework(GoogleCloudSecurityComplianceFrameworkDeploymentFramework value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putFramework.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a>

---

##### `putTargetResourceConfig` <a name="putTargetResourceConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTargetResourceConfig"></a>

```java
public void putTargetResourceConfig(GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTargetResourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTimeouts"></a>

```java
public void putTimeouts(GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudSecurityComplianceFrameworkDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeployment;

GoogleCloudSecurityComplianceFrameworkDeployment.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeployment;

GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeployment;

GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeployment;

GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleCloudSecurityComplianceFrameworkDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleCloudSecurityComplianceFrameworkDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleCloudSecurityComplianceFrameworkDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudSecurityComplianceFrameworkDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlDeploymentReferences">cloudControlDeploymentReferences</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlMetadata">cloudControlMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.computedTargetResource">computedTargetResource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deploymentState">deploymentState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.framework">framework</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceConfig">targetResourceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceDisplayName">targetResourceDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlMetadataInput">cloudControlMetadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkDeploymentIdInput">frameworkDeploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkInput">frameworkInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceConfigInput">targetResourceConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkDeploymentId">frameworkDeploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudControlDeploymentReferences`<sup>Required</sup> <a name="cloudControlDeploymentReferences" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlDeploymentReferences"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList getCloudControlDeploymentReferences();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList</a>

---

##### `cloudControlMetadata`<sup>Required</sup> <a name="cloudControlMetadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlMetadata"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList getCloudControlMetadata();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList</a>

---

##### `computedTargetResource`<sup>Required</sup> <a name="computedTargetResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.computedTargetResource"></a>

```java
public java.lang.String getComputedTargetResource();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deploymentState`<sup>Required</sup> <a name="deploymentState" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deploymentState"></a>

```java
public java.lang.String getDeploymentState();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.framework"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference getFramework();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `targetResourceConfig`<sup>Required</sup> <a name="targetResourceConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceConfig"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference getTargetResourceConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference</a>

---

##### `targetResourceDisplayName`<sup>Required</sup> <a name="targetResourceDisplayName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceDisplayName"></a>

```java
public java.lang.String getTargetResourceDisplayName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.timeouts"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `cloudControlMetadataInput`<sup>Optional</sup> <a name="cloudControlMetadataInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlMetadataInput"></a>

```java
public IResolvable|java.util.List<GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata> getCloudControlMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `frameworkDeploymentIdInput`<sup>Optional</sup> <a name="frameworkDeploymentIdInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkDeploymentIdInput"></a>

```java
public java.lang.String getFrameworkDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkInput"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentFramework getFrameworkInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `targetResourceConfigInput`<sup>Optional</sup> <a name="targetResourceConfigInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceConfigInput"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig getTargetResourceConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.timeoutsInput"></a>

```java
public IResolvable|GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `frameworkDeploymentId`<sup>Required</sup> <a name="frameworkDeploymentId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkDeploymentId"></a>

```java
public java.lang.String getFrameworkDeploymentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences;

GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences.builder()
    .build();
```


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata;

GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.builder()
    .cloudControlDetails(GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails)
    .enforcementMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.property.cloudControlDetails">cloudControlDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a></code> | cloud_control_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.property.enforcementMode">enforcementMode</a></code> | <code>java.lang.String</code> | Enforcement mode for the framework deployment. Possible values: PREVENTIVE DETECTIVE AUDIT. |

---

##### `cloudControlDetails`<sup>Required</sup> <a name="cloudControlDetails" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.property.cloudControlDetails"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails getCloudControlDetails();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a>

cloud_control_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#cloud_control_details GoogleCloudSecurityComplianceFrameworkDeployment#cloud_control_details}

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.property.enforcementMode"></a>

```java
public java.lang.String getEnforcementMode();
```

- *Type:* java.lang.String

Enforcement mode for the framework deployment. Possible values: PREVENTIVE DETECTIVE AUDIT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#enforcement_mode GoogleCloudSecurityComplianceFrameworkDeployment#enforcement_mode}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails;

GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.builder()
    .majorRevisionId(java.lang.String)
    .name(java.lang.String)
//  .parameters(IResolvable|java.util.List<GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.majorRevisionId">majorRevisionId</a></code> | <code>java.lang.String</code> | Major revision of cloudcontrol. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.name">name</a></code> | <code>java.lang.String</code> | The name of the CloudControl in the format: “organizations/{organization}/locations/{location}/ cloudControls/{cloud-control}”. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a>></code> | parameters block. |

---

##### `majorRevisionId`<sup>Required</sup> <a name="majorRevisionId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.majorRevisionId"></a>

```java
public java.lang.String getMajorRevisionId();
```

- *Type:* java.lang.String

Major revision of cloudcontrol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#major_revision_id GoogleCloudSecurityComplianceFrameworkDeployment#major_revision_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the CloudControl in the format: “organizations/{organization}/locations/{location}/ cloudControls/{cloud-control}”.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#name GoogleCloudSecurityComplianceFrameworkDeployment#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.parameters"></a>

```java
public IResolvable|java.util.List<GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a>>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#parameters GoogleCloudSecurityComplianceFrameworkDeployment#parameters}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters;

GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.builder()
    .name(java.lang.String)
    .parameterValue(GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.property.name">name</a></code> | <code>java.lang.String</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a></code> | parameter_value block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#name GoogleCloudSecurityComplianceFrameworkDeployment#name}

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.property.parameterValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue getParameterValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#parameter_value GoogleCloudSecurityComplianceFrameworkDeployment#parameter_value}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue;

GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.builder()
//  .boolValue(java.lang.Boolean|IResolvable)
//  .numberValue(java.lang.Number)
//  .oneofValue(GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue)
//  .stringListValue(GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.numberValue">numberValue</a></code> | <code>java.lang.Number</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.oneofValue">oneofValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a></code> | oneof_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.stringListValue">stringListValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Represents a string value. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#bool_value GoogleCloudSecurityComplianceFrameworkDeployment#bool_value}

---

##### `numberValue`<sup>Optional</sup> <a name="numberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.numberValue"></a>

```java
public java.lang.Number getNumberValue();
```

- *Type:* java.lang.Number

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#number_value GoogleCloudSecurityComplianceFrameworkDeployment#number_value}

---

##### `oneofValue`<sup>Optional</sup> <a name="oneofValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.oneofValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue getOneofValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a>

oneof_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#oneof_value GoogleCloudSecurityComplianceFrameworkDeployment#oneof_value}

---

##### `stringListValue`<sup>Optional</sup> <a name="stringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.stringListValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue getStringListValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_list_value GoogleCloudSecurityComplianceFrameworkDeployment#string_list_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_value GoogleCloudSecurityComplianceFrameworkDeployment#string_value}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue;

GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.builder()
//  .name(java.lang.String)
//  .parameterValue(GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.property.name">name</a></code> | <code>java.lang.String</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | parameter_value block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#name GoogleCloudSecurityComplianceFrameworkDeployment#name}

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue getParameterValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#parameter_value GoogleCloudSecurityComplianceFrameworkDeployment#parameter_value}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue;

GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.builder()
//  .boolValue(java.lang.Boolean|IResolvable)
//  .numberValue(java.lang.Number)
//  .stringListValue(GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue">numberValue</a></code> | <code>java.lang.Number</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue">stringListValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Represents a string value. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#bool_value GoogleCloudSecurityComplianceFrameworkDeployment#bool_value}

---

##### `numberValue`<sup>Optional</sup> <a name="numberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue"></a>

```java
public java.lang.Number getNumberValue();
```

- *Type:* java.lang.Number

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#number_value GoogleCloudSecurityComplianceFrameworkDeployment#number_value}

---

##### `stringListValue`<sup>Optional</sup> <a name="stringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue getStringListValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_list_value GoogleCloudSecurityComplianceFrameworkDeployment#string_list_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_value GoogleCloudSecurityComplianceFrameworkDeployment#string_value}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue;

GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.builder()
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The strings in the list. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#values GoogleCloudSecurityComplianceFrameworkDeployment#values}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue;

GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue.builder()
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The strings in the list. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#values GoogleCloudSecurityComplianceFrameworkDeployment#values}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentConfig <a name="GoogleCloudSecurityComplianceFrameworkDeploymentConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig;

GoogleCloudSecurityComplianceFrameworkDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudControlMetadata(IResolvable|java.util.List<GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata>)
    .framework(GoogleCloudSecurityComplianceFrameworkDeploymentFramework)
    .frameworkDeploymentId(java.lang.String)
    .location(java.lang.String)
    .organization(java.lang.String)
    .targetResourceConfig(GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.cloudControlMetadata">cloudControlMetadata</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>></code> | cloud_control_metadata block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.framework">framework</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a></code> | framework block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.frameworkDeploymentId">frameworkDeploymentId</a></code> | <code>java.lang.String</code> | User provided identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.targetResourceConfig">targetResourceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a></code> | target_resource_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.description">description</a></code> | <code>java.lang.String</code> | User provided description of the Framework deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#id GoogleCloudSecurityComplianceFrameworkDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudControlMetadata`<sup>Required</sup> <a name="cloudControlMetadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.cloudControlMetadata"></a>

```java
public IResolvable|java.util.List<GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata> getCloudControlMetadata();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>>

cloud_control_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#cloud_control_metadata GoogleCloudSecurityComplianceFrameworkDeployment#cloud_control_metadata}

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.framework"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentFramework getFramework();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a>

framework block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#framework GoogleCloudSecurityComplianceFrameworkDeployment#framework}

---

##### `frameworkDeploymentId`<sup>Required</sup> <a name="frameworkDeploymentId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.frameworkDeploymentId"></a>

```java
public java.lang.String getFrameworkDeploymentId();
```

- *Type:* java.lang.String

User provided identifier.

It should be unique in scope of a parent.
This is optional and if not provided, a random UUID will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#framework_deployment_id GoogleCloudSecurityComplianceFrameworkDeployment#framework_deployment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#location GoogleCloudSecurityComplianceFrameworkDeployment#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#organization GoogleCloudSecurityComplianceFrameworkDeployment#organization}

---

##### `targetResourceConfig`<sup>Required</sup> <a name="targetResourceConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.targetResourceConfig"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig getTargetResourceConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a>

target_resource_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#target_resource_config GoogleCloudSecurityComplianceFrameworkDeployment#target_resource_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#deletion_policy GoogleCloudSecurityComplianceFrameworkDeployment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User provided description of the Framework deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#description GoogleCloudSecurityComplianceFrameworkDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#id GoogleCloudSecurityComplianceFrameworkDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.timeouts"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#timeouts GoogleCloudSecurityComplianceFrameworkDeployment#timeouts}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentFramework <a name="GoogleCloudSecurityComplianceFrameworkDeploymentFramework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework;

GoogleCloudSecurityComplianceFrameworkDeploymentFramework.builder()
    .framework(java.lang.String)
    .majorRevisionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework.property.framework">framework</a></code> | <code>java.lang.String</code> | In the format: organizations/{org}/locations/{location}/frameworks/{framework}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework.property.majorRevisionId">majorRevisionId</a></code> | <code>java.lang.String</code> | Major revision id of the framework. |

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

In the format: organizations/{org}/locations/{location}/frameworks/{framework}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#framework GoogleCloudSecurityComplianceFrameworkDeployment#framework}

---

##### `majorRevisionId`<sup>Required</sup> <a name="majorRevisionId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework.property.majorRevisionId"></a>

```java
public java.lang.String getMajorRevisionId();
```

- *Type:* java.lang.String

Major revision id of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#major_revision_id GoogleCloudSecurityComplianceFrameworkDeployment#major_revision_id}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig;

GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.builder()
//  .existingTargetResource(java.lang.String)
//  .targetResourceCreationConfig(GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.property.existingTargetResource">existingTargetResource</a></code> | <code>java.lang.String</code> | CRM node in format organizations/{organization}, folders/{folder}, or projects/{project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.property.targetResourceCreationConfig">targetResourceCreationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a></code> | target_resource_creation_config block. |

---

##### `existingTargetResource`<sup>Optional</sup> <a name="existingTargetResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.property.existingTargetResource"></a>

```java
public java.lang.String getExistingTargetResource();
```

- *Type:* java.lang.String

CRM node in format organizations/{organization}, folders/{folder}, or projects/{project}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#existing_target_resource GoogleCloudSecurityComplianceFrameworkDeployment#existing_target_resource}

---

##### `targetResourceCreationConfig`<sup>Optional</sup> <a name="targetResourceCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.property.targetResourceCreationConfig"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig getTargetResourceCreationConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a>

target_resource_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#target_resource_creation_config GoogleCloudSecurityComplianceFrameworkDeployment#target_resource_creation_config}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig;

GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.builder()
//  .folderCreationConfig(GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig)
//  .projectCreationConfig(GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.property.folderCreationConfig">folderCreationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a></code> | folder_creation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.property.projectCreationConfig">projectCreationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a></code> | project_creation_config block. |

---

##### `folderCreationConfig`<sup>Optional</sup> <a name="folderCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.property.folderCreationConfig"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig getFolderCreationConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a>

folder_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#folder_creation_config GoogleCloudSecurityComplianceFrameworkDeployment#folder_creation_config}

---

##### `projectCreationConfig`<sup>Optional</sup> <a name="projectCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.property.projectCreationConfig"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig getProjectCreationConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a>

project_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#project_creation_config GoogleCloudSecurityComplianceFrameworkDeployment#project_creation_config}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig;

GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.builder()
    .folderDisplayName(java.lang.String)
    .parent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.property.folderDisplayName">folderDisplayName</a></code> | <code>java.lang.String</code> | Display name of the folder to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the folder to be created. It can be an organizations/{org} or folders/{folder}. |

---

##### `folderDisplayName`<sup>Required</sup> <a name="folderDisplayName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.property.folderDisplayName"></a>

```java
public java.lang.String getFolderDisplayName();
```

- *Type:* java.lang.String

Display name of the folder to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#folder_display_name GoogleCloudSecurityComplianceFrameworkDeployment#folder_display_name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent of the folder to be created. It can be an organizations/{org} or folders/{folder}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#parent GoogleCloudSecurityComplianceFrameworkDeployment#parent}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig;

GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.builder()
    .billingAccountId(java.lang.String)
    .parent(java.lang.String)
    .projectDisplayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.billingAccountId">billingAccountId</a></code> | <code>java.lang.String</code> | Billing account id to be used for the project. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | organizations/{org} or folders/{folder}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.projectDisplayName">projectDisplayName</a></code> | <code>java.lang.String</code> | Display name of the project to be created. |

---

##### `billingAccountId`<sup>Required</sup> <a name="billingAccountId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.billingAccountId"></a>

```java
public java.lang.String getBillingAccountId();
```

- *Type:* java.lang.String

Billing account id to be used for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#billing_account_id GoogleCloudSecurityComplianceFrameworkDeployment#billing_account_id}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

organizations/{org} or folders/{folder}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#parent GoogleCloudSecurityComplianceFrameworkDeployment#parent}

---

##### `projectDisplayName`<sup>Required</sup> <a name="projectDisplayName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.projectDisplayName"></a>

```java
public java.lang.String getProjectDisplayName();
```

- *Type:* java.lang.String

Display name of the project to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#project_display_name GoogleCloudSecurityComplianceFrameworkDeployment#project_display_name}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts;

GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#create GoogleCloudSecurityComplianceFrameworkDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#delete GoogleCloudSecurityComplianceFrameworkDeployment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#create GoogleCloudSecurityComplianceFrameworkDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#delete GoogleCloudSecurityComplianceFrameworkDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList;

new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.get"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference;

new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.cloudControlDeployment">cloudControlDeployment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudControlDeployment`<sup>Required</sup> <a name="cloudControlDeployment" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.cloudControlDeployment"></a>

```java
public java.lang.String getCloudControlDeployment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.internalValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference;

new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.putParameters"></a>

```java
public void putParameters(IResolvable|java.util.List<GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.putParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a>>

---

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.majorRevisionIdInput">majorRevisionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.majorRevisionId">majorRevisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.parameters"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList</a>

---

##### `majorRevisionIdInput`<sup>Optional</sup> <a name="majorRevisionIdInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.majorRevisionIdInput"></a>

```java
public java.lang.String getMajorRevisionIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.parametersInput"></a>

```java
public IResolvable|java.util.List<GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a>>

---

##### `majorRevisionId`<sup>Required</sup> <a name="majorRevisionId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.majorRevisionId"></a>

```java
public java.lang.String getMajorRevisionId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.internalValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList;

new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.get"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a>>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference;

new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.putParameterValue">putParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameterValue` <a name="putParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.putParameterValue"></a>

```java
public void putParameterValue(GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.putParameterValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.parameterValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference getParameterValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.parameterValueInput"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue getParameterValueInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference;

new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue">putParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameterValue` <a name="putParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue"></a>

```java
public void putParameterValue(GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue"></a>

```java
public void resetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference getParameterValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue getParameterValueInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference;

new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue">putStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue">resetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue">resetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStringListValue` <a name="putStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue"></a>

```java
public void putStringListValue(GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue"></a>

```java
public void resetBoolValue()
```

##### `resetNumberValue` <a name="resetNumberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue"></a>

```java
public void resetNumberValue()
```

##### `resetStringListValue` <a name="resetStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue"></a>

```java
public void resetStringListValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue">stringListValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput">numberValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput">stringListValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue">numberValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stringListValue`<sup>Required</sup> <a name="stringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference getStringListValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a>

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput"></a>

```java
public java.lang.Boolean|IResolvable getBoolValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numberValueInput`<sup>Optional</sup> <a name="numberValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput"></a>

```java
public java.lang.Number getNumberValueInput();
```

- *Type:* java.lang.Number

---

##### `stringListValueInput`<sup>Optional</sup> <a name="stringListValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue getStringListValueInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue"></a>

```java
public java.lang.Number getNumberValue();
```

- *Type:* java.lang.Number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference;

new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference;

new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putOneofValue">putOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putStringListValue">putStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue">resetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue">resetOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue">resetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOneofValue` <a name="putOneofValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putOneofValue"></a>

```java
public void putOneofValue(GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putOneofValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a>

---

##### `putStringListValue` <a name="putStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putStringListValue"></a>

```java
public void putStringListValue(GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putStringListValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a>

---

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue"></a>

```java
public void resetBoolValue()
```

##### `resetNumberValue` <a name="resetNumberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue"></a>

```java
public void resetNumberValue()
```

##### `resetOneofValue` <a name="resetOneofValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue"></a>

```java
public void resetOneofValue()
```

##### `resetStringListValue` <a name="resetStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue"></a>

```java
public void resetStringListValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue">oneofValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue">stringListValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput">numberValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput">oneofValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput">stringListValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.numberValue">numberValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oneofValue`<sup>Required</sup> <a name="oneofValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference getOneofValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference</a>

---

##### `stringListValue`<sup>Required</sup> <a name="stringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference getStringListValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference</a>

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput"></a>

```java
public java.lang.Boolean|IResolvable getBoolValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numberValueInput`<sup>Optional</sup> <a name="numberValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput"></a>

```java
public java.lang.Number getNumberValueInput();
```

- *Type:* java.lang.Number

---

##### `oneofValueInput`<sup>Optional</sup> <a name="oneofValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue getOneofValueInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a>

---

##### `stringListValueInput`<sup>Optional</sup> <a name="stringListValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue getStringListValueInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a>

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.numberValue"></a>

```java
public java.lang.Number getNumberValue();
```

- *Type:* java.lang.Number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.internalValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference;

new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList;

new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.get"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference;

new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.putCloudControlDetails">putCloudControlDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudControlDetails` <a name="putCloudControlDetails" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.putCloudControlDetails"></a>

```java
public void putCloudControlDetails(GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.putCloudControlDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.cloudControlDetails">cloudControlDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.cloudControlDetailsInput">cloudControlDetailsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.enforcementModeInput">enforcementModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.enforcementMode">enforcementMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudControlDetails`<sup>Required</sup> <a name="cloudControlDetails" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.cloudControlDetails"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference getCloudControlDetails();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference</a>

---

##### `cloudControlDetailsInput`<sup>Optional</sup> <a name="cloudControlDetailsInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.cloudControlDetailsInput"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails getCloudControlDetailsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a>

---

##### `enforcementModeInput`<sup>Optional</sup> <a name="enforcementModeInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.enforcementModeInput"></a>

```java
public java.lang.String getEnforcementModeInput();
```

- *Type:* java.lang.String

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.enforcementMode"></a>

```java
public java.lang.String getEnforcementMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference;

new GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.frameworkInput">frameworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.majorRevisionIdInput">majorRevisionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.framework">framework</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.majorRevisionId">majorRevisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.frameworkInput"></a>

```java
public java.lang.String getFrameworkInput();
```

- *Type:* java.lang.String

---

##### `majorRevisionIdInput`<sup>Optional</sup> <a name="majorRevisionIdInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.majorRevisionIdInput"></a>

```java
public java.lang.String getMajorRevisionIdInput();
```

- *Type:* java.lang.String

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

---

##### `majorRevisionId`<sup>Required</sup> <a name="majorRevisionId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.majorRevisionId"></a>

```java
public java.lang.String getMajorRevisionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.internalValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentFramework getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference;

new GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.putTargetResourceCreationConfig">putTargetResourceCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resetExistingTargetResource">resetExistingTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resetTargetResourceCreationConfig">resetTargetResourceCreationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetResourceCreationConfig` <a name="putTargetResourceCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.putTargetResourceCreationConfig"></a>

```java
public void putTargetResourceCreationConfig(GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.putTargetResourceCreationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a>

---

##### `resetExistingTargetResource` <a name="resetExistingTargetResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resetExistingTargetResource"></a>

```java
public void resetExistingTargetResource()
```

##### `resetTargetResourceCreationConfig` <a name="resetTargetResourceCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resetTargetResourceCreationConfig"></a>

```java
public void resetTargetResourceCreationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.targetResourceCreationConfig">targetResourceCreationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.existingTargetResourceInput">existingTargetResourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.targetResourceCreationConfigInput">targetResourceCreationConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.existingTargetResource">existingTargetResource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetResourceCreationConfig`<sup>Required</sup> <a name="targetResourceCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.targetResourceCreationConfig"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference getTargetResourceCreationConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference</a>

---

##### `existingTargetResourceInput`<sup>Optional</sup> <a name="existingTargetResourceInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.existingTargetResourceInput"></a>

```java
public java.lang.String getExistingTargetResourceInput();
```

- *Type:* java.lang.String

---

##### `targetResourceCreationConfigInput`<sup>Optional</sup> <a name="targetResourceCreationConfigInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.targetResourceCreationConfigInput"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig getTargetResourceCreationConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a>

---

##### `existingTargetResource`<sup>Required</sup> <a name="existingTargetResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.existingTargetResource"></a>

```java
public java.lang.String getExistingTargetResource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.internalValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference;

new GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.folderDisplayNameInput">folderDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.folderDisplayName">folderDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `folderDisplayNameInput`<sup>Optional</sup> <a name="folderDisplayNameInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.folderDisplayNameInput"></a>

```java
public java.lang.String getFolderDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `folderDisplayName`<sup>Required</sup> <a name="folderDisplayName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.folderDisplayName"></a>

```java
public java.lang.String getFolderDisplayName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.internalValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference;

new GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putFolderCreationConfig">putFolderCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putProjectCreationConfig">putProjectCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resetFolderCreationConfig">resetFolderCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resetProjectCreationConfig">resetProjectCreationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFolderCreationConfig` <a name="putFolderCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putFolderCreationConfig"></a>

```java
public void putFolderCreationConfig(GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putFolderCreationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a>

---

##### `putProjectCreationConfig` <a name="putProjectCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putProjectCreationConfig"></a>

```java
public void putProjectCreationConfig(GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putProjectCreationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a>

---

##### `resetFolderCreationConfig` <a name="resetFolderCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resetFolderCreationConfig"></a>

```java
public void resetFolderCreationConfig()
```

##### `resetProjectCreationConfig` <a name="resetProjectCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resetProjectCreationConfig"></a>

```java
public void resetProjectCreationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.folderCreationConfig">folderCreationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.projectCreationConfig">projectCreationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.folderCreationConfigInput">folderCreationConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.projectCreationConfigInput">projectCreationConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `folderCreationConfig`<sup>Required</sup> <a name="folderCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.folderCreationConfig"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference getFolderCreationConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference</a>

---

##### `projectCreationConfig`<sup>Required</sup> <a name="projectCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.projectCreationConfig"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference getProjectCreationConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference</a>

---

##### `folderCreationConfigInput`<sup>Optional</sup> <a name="folderCreationConfigInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.folderCreationConfigInput"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig getFolderCreationConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a>

---

##### `projectCreationConfigInput`<sup>Optional</sup> <a name="projectCreationConfigInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.projectCreationConfigInput"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig getProjectCreationConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.internalValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference;

new GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.billingAccountIdInput">billingAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.projectDisplayNameInput">projectDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.billingAccountId">billingAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.projectDisplayName">projectDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `billingAccountIdInput`<sup>Optional</sup> <a name="billingAccountIdInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.billingAccountIdInput"></a>

```java
public java.lang.String getBillingAccountIdInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `projectDisplayNameInput`<sup>Optional</sup> <a name="projectDisplayNameInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.projectDisplayNameInput"></a>

```java
public java.lang.String getProjectDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `billingAccountId`<sup>Required</sup> <a name="billingAccountId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.billingAccountId"></a>

```java
public java.lang.String getBillingAccountId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `projectDisplayName`<sup>Required</sup> <a name="projectDisplayName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.projectDisplayName"></a>

```java
public java.lang.String getProjectDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.internalValue"></a>

```java
public GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_security_compliance_framework_deployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference;

new GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a>

---



