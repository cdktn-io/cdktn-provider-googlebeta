# `googleComputeRegionCommitment` Submodule <a name="`googleComputeRegionCommitment` Submodule" id="@cdktn/provider-google-beta.googleComputeRegionCommitment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionCommitment <a name="GoogleComputeRegionCommitment" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment google_compute_region_commitment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_commitment.GoogleComputeRegionCommitment;

GoogleComputeRegionCommitment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .plan(java.lang.String)
//  .autoRenew(java.lang.Boolean|IResolvable)
//  .category(java.lang.String)
//  .description(java.lang.String)
//  .existingReservations(java.lang.String)
//  .id(java.lang.String)
//  .licenseResource(GoogleComputeRegionCommitmentLicenseResource)
//  .params(GoogleComputeRegionCommitmentParams)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .resources(IResolvable|java.util.List<GoogleComputeRegionCommitmentResources>)
//  .timeouts(GoogleComputeRegionCommitmentTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.plan">plan</a></code> | <code>java.lang.String</code> | The plan for this commitment, which determines duration and discount rate. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to enable automatic renewal for the commitment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.category">category</a></code> | <code>java.lang.String</code> | The category of the commitment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.existingReservations">existingReservations</a></code> | <code>java.lang.String</code> | Specifies the already existing reservations to attach to the Commitment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#id GoogleComputeRegionCommitment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.licenseResource">licenseResource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a></code> | license_resource block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParams">GoogleComputeRegionCommitmentParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#project GoogleComputeRegionCommitment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | URL of the region where this commitment may be used. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.resources">resources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>></code> | resources block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of commitment, which affects the discount rate and the eligible resources. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#name GoogleComputeRegionCommitment#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.plan"></a>

- *Type:* java.lang.String

The plan for this commitment, which determines duration and discount rate.

The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years). Possible values: ["TWELVE_MONTH", "THIRTY_SIX_MONTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#plan GoogleComputeRegionCommitment#plan}

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.autoRenew"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to enable automatic renewal for the commitment.

The default value is false if not specified.
If the field is set to true, the commitment will be automatically renewed for either
one or three years according to the terms of the existing commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#auto_renew GoogleComputeRegionCommitment#auto_renew}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.category"></a>

- *Type:* java.lang.String

The category of the commitment.

Category MACHINE specifies commitments composed of
machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE
specifies commitments composed of software licenses, listed in licenseResources.
Note that only MACHINE commitments should have a Type specified. Possible values: ["LICENSE", "MACHINE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#category GoogleComputeRegionCommitment#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#description GoogleComputeRegionCommitment#description}

---

##### `existingReservations`<sup>Optional</sup> <a name="existingReservations" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.existingReservations"></a>

- *Type:* java.lang.String

Specifies the already existing reservations to attach to the Commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#existing_reservations GoogleComputeRegionCommitment#existing_reservations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#id GoogleComputeRegionCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseResource`<sup>Optional</sup> <a name="licenseResource" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.licenseResource"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a>

license_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#license_resource GoogleComputeRegionCommitment#license_resource}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.params"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParams">GoogleComputeRegionCommitmentParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#params GoogleComputeRegionCommitment#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#project GoogleComputeRegionCommitment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.region"></a>

- *Type:* java.lang.String

URL of the region where this commitment may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#region GoogleComputeRegionCommitment#region}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.resources"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#resources GoogleComputeRegionCommitment#resources}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#timeouts GoogleComputeRegionCommitment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of commitment, which affects the discount rate and the eligible resources.

The type could be one of the following value: 'MEMORY_OPTIMIZED', 'ACCELERATOR_OPTIMIZED',
'GENERAL_PURPOSE', 'GENERAL_PURPOSE_N2', 'GENERAL_PURPOSE_N2D', 'GENERAL_PURPOSE_E2',
'GENERAL_PURPOSE_T2D', 'GENERAL_PURPOSE_C3', 'COMPUTE_OPTIMIZED_C2', 'COMPUTE_OPTIMIZED_C2D' and
'GRAPHICS_OPTIMIZED_G2'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#type GoogleComputeRegionCommitment#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putLicenseResource">putLicenseResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetAutoRenew">resetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetExistingReservations">resetExistingReservations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetLicenseResource">resetLicenseResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLicenseResource` <a name="putLicenseResource" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putLicenseResource"></a>

```java
public void putLicenseResource(GoogleComputeRegionCommitmentLicenseResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putLicenseResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a>

---

##### `putParams` <a name="putParams" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putParams"></a>

```java
public void putParams(GoogleComputeRegionCommitmentParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParams">GoogleComputeRegionCommitmentParams</a>

---

##### `putResources` <a name="putResources" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putResources"></a>

```java
public void putResources(IResolvable|java.util.List<GoogleComputeRegionCommitmentResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putResources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeRegionCommitmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a>

---

##### `resetAutoRenew` <a name="resetAutoRenew" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetAutoRenew"></a>

```java
public void resetAutoRenew()
```

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetCategory"></a>

```java
public void resetCategory()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExistingReservations` <a name="resetExistingReservations" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetExistingReservations"></a>

```java
public void resetExistingReservations()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetId"></a>

```java
public void resetId()
```

##### `resetLicenseResource` <a name="resetLicenseResource" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetLicenseResource"></a>

```java
public void resetLicenseResource()
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetParams"></a>

```java
public void resetParams()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetResources"></a>

```java
public void resetResources()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeRegionCommitment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_commitment.GoogleComputeRegionCommitment;

GoogleComputeRegionCommitment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_commitment.GoogleComputeRegionCommitment;

GoogleComputeRegionCommitment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_commitment.GoogleComputeRegionCommitment;

GoogleComputeRegionCommitment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_commitment.GoogleComputeRegionCommitment;

GoogleComputeRegionCommitment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeRegionCommitment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleComputeRegionCommitment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeRegionCommitment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeRegionCommitment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionCommitment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.commitmentId">commitmentId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.endTimestamp">endTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.licenseResource">licenseResource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference">GoogleComputeRegionCommitmentLicenseResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference">GoogleComputeRegionCommitmentParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList">GoogleComputeRegionCommitmentResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.startTimestamp">startTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference">GoogleComputeRegionCommitmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.autoRenewInput">autoRenewInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.existingReservationsInput">existingReservationsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.licenseResourceInput">licenseResourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParams">GoogleComputeRegionCommitmentParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.planInput">planInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.resourcesInput">resourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.existingReservations">existingReservations</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.plan">plan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `commitmentId`<sup>Required</sup> <a name="commitmentId" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.commitmentId"></a>

```java
public java.lang.Number getCommitmentId();
```

- *Type:* java.lang.Number

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `endTimestamp`<sup>Required</sup> <a name="endTimestamp" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.endTimestamp"></a>

```java
public java.lang.String getEndTimestamp();
```

- *Type:* java.lang.String

---

##### `licenseResource`<sup>Required</sup> <a name="licenseResource" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.licenseResource"></a>

```java
public GoogleComputeRegionCommitmentLicenseResourceOutputReference getLicenseResource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference">GoogleComputeRegionCommitmentLicenseResourceOutputReference</a>

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.params"></a>

```java
public GoogleComputeRegionCommitmentParamsOutputReference getParams();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference">GoogleComputeRegionCommitmentParamsOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.resources"></a>

```java
public GoogleComputeRegionCommitmentResourcesList getResources();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList">GoogleComputeRegionCommitmentResourcesList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `startTimestamp`<sup>Required</sup> <a name="startTimestamp" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.startTimestamp"></a>

```java
public java.lang.String getStartTimestamp();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.timeouts"></a>

```java
public GoogleComputeRegionCommitmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference">GoogleComputeRegionCommitmentTimeoutsOutputReference</a>

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.autoRenewInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoRenewInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `existingReservationsInput`<sup>Optional</sup> <a name="existingReservationsInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.existingReservationsInput"></a>

```java
public java.lang.String getExistingReservationsInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseResourceInput`<sup>Optional</sup> <a name="licenseResourceInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.licenseResourceInput"></a>

```java
public GoogleComputeRegionCommitmentLicenseResource getLicenseResourceInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.paramsInput"></a>

```java
public GoogleComputeRegionCommitmentParams getParamsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParams">GoogleComputeRegionCommitmentParams</a>

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.planInput"></a>

```java
public java.lang.String getPlanInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.resourcesInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeRegionCommitmentResources> getResourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.timeoutsInput"></a>

```java
public IResolvable|GoogleComputeRegionCommitmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.autoRenew"></a>

```java
public java.lang.Boolean|IResolvable getAutoRenew();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `existingReservations`<sup>Required</sup> <a name="existingReservations" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.existingReservations"></a>

```java
public java.lang.String getExistingReservations();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionCommitmentConfig <a name="GoogleComputeRegionCommitmentConfig" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_commitment.GoogleComputeRegionCommitmentConfig;

GoogleComputeRegionCommitmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .plan(java.lang.String)
//  .autoRenew(java.lang.Boolean|IResolvable)
//  .category(java.lang.String)
//  .description(java.lang.String)
//  .existingReservations(java.lang.String)
//  .id(java.lang.String)
//  .licenseResource(GoogleComputeRegionCommitmentLicenseResource)
//  .params(GoogleComputeRegionCommitmentParams)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .resources(IResolvable|java.util.List<GoogleComputeRegionCommitmentResources>)
//  .timeouts(GoogleComputeRegionCommitmentTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.plan">plan</a></code> | <code>java.lang.String</code> | The plan for this commitment, which determines duration and discount rate. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to enable automatic renewal for the commitment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.category">category</a></code> | <code>java.lang.String</code> | The category of the commitment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.existingReservations">existingReservations</a></code> | <code>java.lang.String</code> | Specifies the already existing reservations to attach to the Commitment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#id GoogleComputeRegionCommitment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.licenseResource">licenseResource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a></code> | license_resource block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParams">GoogleComputeRegionCommitmentParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#project GoogleComputeRegionCommitment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.region">region</a></code> | <code>java.lang.String</code> | URL of the region where this commitment may be used. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.resources">resources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>></code> | resources block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of commitment, which affects the discount rate and the eligible resources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#name GoogleComputeRegionCommitment#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

The plan for this commitment, which determines duration and discount rate.

The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years). Possible values: ["TWELVE_MONTH", "THIRTY_SIX_MONTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#plan GoogleComputeRegionCommitment#plan}

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.autoRenew"></a>

```java
public java.lang.Boolean|IResolvable getAutoRenew();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to enable automatic renewal for the commitment.

The default value is false if not specified.
If the field is set to true, the commitment will be automatically renewed for either
one or three years according to the terms of the existing commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#auto_renew GoogleComputeRegionCommitment#auto_renew}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

The category of the commitment.

Category MACHINE specifies commitments composed of
machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE
specifies commitments composed of software licenses, listed in licenseResources.
Note that only MACHINE commitments should have a Type specified. Possible values: ["LICENSE", "MACHINE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#category GoogleComputeRegionCommitment#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#description GoogleComputeRegionCommitment#description}

---

##### `existingReservations`<sup>Optional</sup> <a name="existingReservations" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.existingReservations"></a>

```java
public java.lang.String getExistingReservations();
```

- *Type:* java.lang.String

Specifies the already existing reservations to attach to the Commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#existing_reservations GoogleComputeRegionCommitment#existing_reservations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#id GoogleComputeRegionCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseResource`<sup>Optional</sup> <a name="licenseResource" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.licenseResource"></a>

```java
public GoogleComputeRegionCommitmentLicenseResource getLicenseResource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a>

license_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#license_resource GoogleComputeRegionCommitment#license_resource}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.params"></a>

```java
public GoogleComputeRegionCommitmentParams getParams();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParams">GoogleComputeRegionCommitmentParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#params GoogleComputeRegionCommitment#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#project GoogleComputeRegionCommitment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

URL of the region where this commitment may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#region GoogleComputeRegionCommitment#region}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.resources"></a>

```java
public IResolvable|java.util.List<GoogleComputeRegionCommitmentResources> getResources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#resources GoogleComputeRegionCommitment#resources}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.timeouts"></a>

```java
public GoogleComputeRegionCommitmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#timeouts GoogleComputeRegionCommitment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of commitment, which affects the discount rate and the eligible resources.

The type could be one of the following value: 'MEMORY_OPTIMIZED', 'ACCELERATOR_OPTIMIZED',
'GENERAL_PURPOSE', 'GENERAL_PURPOSE_N2', 'GENERAL_PURPOSE_N2D', 'GENERAL_PURPOSE_E2',
'GENERAL_PURPOSE_T2D', 'GENERAL_PURPOSE_C3', 'COMPUTE_OPTIMIZED_C2', 'COMPUTE_OPTIMIZED_C2D' and
'GRAPHICS_OPTIMIZED_G2'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#type GoogleComputeRegionCommitment#type}

---

### GoogleComputeRegionCommitmentLicenseResource <a name="GoogleComputeRegionCommitmentLicenseResource" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_commitment.GoogleComputeRegionCommitmentLicenseResource;

GoogleComputeRegionCommitmentLicenseResource.builder()
    .license(java.lang.String)
//  .amount(java.lang.String)
//  .coresPerLicense(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.license">license</a></code> | <code>java.lang.String</code> | Any applicable license URI. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.amount">amount</a></code> | <code>java.lang.String</code> | The number of licenses purchased. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.coresPerLicense">coresPerLicense</a></code> | <code>java.lang.String</code> | Specifies the core range of the instance for which this license applies. |

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.license"></a>

```java
public java.lang.String getLicense();
```

- *Type:* java.lang.String

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#license GoogleComputeRegionCommitment#license}

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.amount"></a>

```java
public java.lang.String getAmount();
```

- *Type:* java.lang.String

The number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#amount GoogleComputeRegionCommitment#amount}

---

##### `coresPerLicense`<sup>Optional</sup> <a name="coresPerLicense" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.coresPerLicense"></a>

```java
public java.lang.String getCoresPerLicense();
```

- *Type:* java.lang.String

Specifies the core range of the instance for which this license applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#cores_per_license GoogleComputeRegionCommitment#cores_per_license}

---

### GoogleComputeRegionCommitmentParams <a name="GoogleComputeRegionCommitmentParams" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParams.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_commitment.GoogleComputeRegionCommitmentParams;

GoogleComputeRegionCommitmentParams.builder()
//  .resourceManagerTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource manager tags to be bound to the commitment. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParams.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource manager tags to be bound to the commitment.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#resource_manager_tags GoogleComputeRegionCommitment#resource_manager_tags}

---

### GoogleComputeRegionCommitmentResources <a name="GoogleComputeRegionCommitmentResources" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_commitment.GoogleComputeRegionCommitmentResources;

GoogleComputeRegionCommitmentResources.builder()
//  .acceleratorType(java.lang.String)
//  .amount(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | Name of the accelerator type resource. Applicable only when the type is ACCELERATOR. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.amount">amount</a></code> | <code>java.lang.String</code> | The amount of the resource purchased (in a type-dependent unit, such as bytes). |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.type">type</a></code> | <code>java.lang.String</code> | Type of resource for which this commitment applies. Possible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR. |

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

Name of the accelerator type resource. Applicable only when the type is ACCELERATOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#accelerator_type GoogleComputeRegionCommitment#accelerator_type}

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.amount"></a>

```java
public java.lang.String getAmount();
```

- *Type:* java.lang.String

The amount of the resource purchased (in a type-dependent unit, such as bytes).

For vCPUs, this can just be an integer. For memory,
this must be provided in MB. Memory must be a multiple of 256 MB,
with up to 6.5GB of memory per every vCPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#amount GoogleComputeRegionCommitment#amount}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of resource for which this commitment applies. Possible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#type GoogleComputeRegionCommitment#type}

---

### GoogleComputeRegionCommitmentTimeouts <a name="GoogleComputeRegionCommitmentTimeouts" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_commitment.GoogleComputeRegionCommitmentTimeouts;

GoogleComputeRegionCommitmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#create GoogleComputeRegionCommitment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#delete GoogleComputeRegionCommitment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#create GoogleComputeRegionCommitment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_region_commitment#delete GoogleComputeRegionCommitment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionCommitmentLicenseResourceOutputReference <a name="GoogleComputeRegionCommitmentLicenseResourceOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_commitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference;

new GoogleComputeRegionCommitmentLicenseResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resetAmount">resetAmount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resetCoresPerLicense">resetCoresPerLicense</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmount` <a name="resetAmount" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resetAmount"></a>

```java
public void resetAmount()
```

##### `resetCoresPerLicense` <a name="resetCoresPerLicense" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resetCoresPerLicense"></a>

```java
public void resetCoresPerLicense()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.amountInput">amountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicenseInput">coresPerLicenseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.licenseInput">licenseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.amount">amount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicense">coresPerLicense</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.license">license</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.amountInput"></a>

```java
public java.lang.String getAmountInput();
```

- *Type:* java.lang.String

---

##### `coresPerLicenseInput`<sup>Optional</sup> <a name="coresPerLicenseInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicenseInput"></a>

```java
public java.lang.String getCoresPerLicenseInput();
```

- *Type:* java.lang.String

---

##### `licenseInput`<sup>Optional</sup> <a name="licenseInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.licenseInput"></a>

```java
public java.lang.String getLicenseInput();
```

- *Type:* java.lang.String

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.amount"></a>

```java
public java.lang.String getAmount();
```

- *Type:* java.lang.String

---

##### `coresPerLicense`<sup>Required</sup> <a name="coresPerLicense" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicense"></a>

```java
public java.lang.String getCoresPerLicense();
```

- *Type:* java.lang.String

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.license"></a>

```java
public java.lang.String getLicense();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionCommitmentLicenseResource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a>

---


### GoogleComputeRegionCommitmentParamsOutputReference <a name="GoogleComputeRegionCommitmentParamsOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_commitment.GoogleComputeRegionCommitmentParamsOutputReference;

new GoogleComputeRegionCommitmentParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.resetResourceManagerTags"></a>

```java
public void resetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParams">GoogleComputeRegionCommitmentParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.property.resourceManagerTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParamsOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionCommitmentParams getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentParams">GoogleComputeRegionCommitmentParams</a>

---


### GoogleComputeRegionCommitmentResourcesList <a name="GoogleComputeRegionCommitmentResourcesList" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_commitment.GoogleComputeRegionCommitmentResourcesList;

new GoogleComputeRegionCommitmentResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.get"></a>

```java
public GoogleComputeRegionCommitmentResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeRegionCommitmentResources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>>

---


### GoogleComputeRegionCommitmentResourcesOutputReference <a name="GoogleComputeRegionCommitmentResourcesOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_commitment.GoogleComputeRegionCommitmentResourcesOutputReference;

new GoogleComputeRegionCommitmentResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetAmount">resetAmount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetAcceleratorType"></a>

```java
public void resetAcceleratorType()
```

##### `resetAmount` <a name="resetAmount" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetAmount"></a>

```java
public void resetAmount()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.amountInput">amountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.amount">amount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.acceleratorTypeInput"></a>

```java
public java.lang.String getAcceleratorTypeInput();
```

- *Type:* java.lang.String

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.amountInput"></a>

```java
public java.lang.String getAmountInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.amount"></a>

```java
public java.lang.String getAmount();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeRegionCommitmentResources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>

---


### GoogleComputeRegionCommitmentTimeoutsOutputReference <a name="GoogleComputeRegionCommitmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_commitment.GoogleComputeRegionCommitmentTimeoutsOutputReference;

new GoogleComputeRegionCommitmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeRegionCommitmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a>

---



