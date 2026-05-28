# `googleComputeOrganizationSecurityPolicy` Submodule <a name="`googleComputeOrganizationSecurityPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeOrganizationSecurityPolicy <a name="GoogleComputeOrganizationSecurityPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy google_compute_organization_security_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeorganizationsecuritypolicy"

googlecomputeorganizationsecuritypolicy.NewGoogleComputeOrganizationSecurityPolicy(scope Construct, id *string, config GoogleComputeOrganizationSecurityPolicyConfig) GoogleComputeOrganizationSecurityPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig">GoogleComputeOrganizationSecurityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig">GoogleComputeOrganizationSecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig">PutAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetAdvancedOptionsConfig">ResetAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetShortName">ResetShortName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedOptionsConfig` <a name="PutAdvancedOptionsConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig"></a>

```go
func PutAdvancedOptionsConfig(value GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeOrganizationSecurityPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a>

---

##### `ResetAdvancedOptionsConfig` <a name="ResetAdvancedOptionsConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetAdvancedOptionsConfig"></a>

```go
func ResetAdvancedOptionsConfig()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetShortName` <a name="ResetShortName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetShortName"></a>

```go
func ResetShortName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeOrganizationSecurityPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeorganizationsecuritypolicy"

googlecomputeorganizationsecuritypolicy.GoogleComputeOrganizationSecurityPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeorganizationsecuritypolicy"

googlecomputeorganizationsecuritypolicy.GoogleComputeOrganizationSecurityPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeorganizationsecuritypolicy"

googlecomputeorganizationsecuritypolicy.GoogleComputeOrganizationSecurityPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeorganizationsecuritypolicy"

googlecomputeorganizationsecuritypolicy.GoogleComputeOrganizationSecurityPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleComputeOrganizationSecurityPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeOrganizationSecurityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeOrganizationSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeOrganizationSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.advancedOptionsConfig">AdvancedOptionsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference">GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.advancedOptionsConfigInput">AdvancedOptionsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.shortNameInput">ShortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.shortName">ShortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdvancedOptionsConfig`<sup>Required</sup> <a name="AdvancedOptionsConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.advancedOptionsConfig"></a>

```go
func AdvancedOptionsConfig() GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference">GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference</a>

---

##### `AdvancedOptionsConfigInput`<sup>Optional</sup> <a name="AdvancedOptionsConfigInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.advancedOptionsConfigInput"></a>

```go
func AdvancedOptionsConfigInput() GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ShortNameInput`<sup>Optional</sup> <a name="ShortNameInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.shortNameInput"></a>

```go
func ShortNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.shortName"></a>

```go
func ShortName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig <a name="GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeorganizationsecuritypolicy"

&googlecomputeorganizationsecuritypolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig {
	JsonCustomConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig,
	JsonParsing: *string,
	LogLevel: *string,
	RequestBodyInspectionSize: *string,
	UserIpRequestHeaders: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig">JsonCustomConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | json_custom_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonParsing">JsonParsing</a></code> | <code>*string</code> | JSON body parsing. Supported values include: "DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL". Possible values: ["DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.logLevel">LogLevel</a></code> | <code>*string</code> | Logging level. Supported values include: "NORMAL", "VERBOSE". Possible values: ["NORMAL", "VERBOSE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.requestBodyInspectionSize">RequestBodyInspectionSize</a></code> | <code>*string</code> | The maximum request size chosen by the customer with Waf enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.userIpRequestHeaders">UserIpRequestHeaders</a></code> | <code>*[]*string</code> | An optional list of case-insensitive request header names to use for resolving the client source IP address. |

---

##### `JsonCustomConfig`<sup>Optional</sup> <a name="JsonCustomConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig"></a>

```go
JsonCustomConfig GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

json_custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#json_custom_config GoogleComputeOrganizationSecurityPolicy#json_custom_config}

---

##### `JsonParsing`<sup>Optional</sup> <a name="JsonParsing" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonParsing"></a>

```go
JsonParsing *string
```

- *Type:* *string

JSON body parsing. Supported values include: "DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL". Possible values: ["DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#json_parsing GoogleComputeOrganizationSecurityPolicy#json_parsing}

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

Logging level. Supported values include: "NORMAL", "VERBOSE". Possible values: ["NORMAL", "VERBOSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#log_level GoogleComputeOrganizationSecurityPolicy#log_level}

---

##### `RequestBodyInspectionSize`<sup>Optional</sup> <a name="RequestBodyInspectionSize" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.requestBodyInspectionSize"></a>

```go
RequestBodyInspectionSize *string
```

- *Type:* *string

The maximum request size chosen by the customer with Waf enabled.

Values supported are "8KB", "16KB", "32KB", "48KB" and "64KB".
Values are case insensitive. Possible values: ["8KB", "16KB", "32KB", "48KB", "64KB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#request_body_inspection_size GoogleComputeOrganizationSecurityPolicy#request_body_inspection_size}

---

##### `UserIpRequestHeaders`<sup>Optional</sup> <a name="UserIpRequestHeaders" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.userIpRequestHeaders"></a>

```go
UserIpRequestHeaders *[]*string
```

- *Type:* *[]*string

An optional list of case-insensitive request header names to use for resolving the client source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#user_ip_request_headers GoogleComputeOrganizationSecurityPolicy#user_ip_request_headers}

---

### GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig <a name="GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeorganizationsecuritypolicy"

&googlecomputeorganizationsecuritypolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig {
	ContentTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes">ContentTypes</a></code> | <code>*[]*string</code> | A list of content types to be parsed as JSON. |

---

##### `ContentTypes`<sup>Required</sup> <a name="ContentTypes" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes"></a>

```go
ContentTypes *[]*string
```

- *Type:* *[]*string

A list of content types to be parsed as JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#content_types GoogleComputeOrganizationSecurityPolicy#content_types}

---

### GoogleComputeOrganizationSecurityPolicyConfig <a name="GoogleComputeOrganizationSecurityPolicyConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeorganizationsecuritypolicy"

&googlecomputeorganizationsecuritypolicy.GoogleComputeOrganizationSecurityPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Parent: *string,
	AdvancedOptionsConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig,
	DeletionPolicy: *string,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	ShortName: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.parent">Parent</a></code> | <code>*string</code> | The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.advancedOptionsConfig">AdvancedOptionsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a></code> | advanced_options_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.description">Description</a></code> | <code>*string</code> | A textual description for the organization security policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User-provided name of the organization security policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#id GoogleComputeOrganizationSecurityPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.shortName">ShortName</a></code> | <code>*string</code> | User-provided name of the organization security policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.type">Type</a></code> | <code>*string</code> | The type indicates the intended use of the security policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#parent GoogleComputeOrganizationSecurityPolicy#parent}

---

##### `AdvancedOptionsConfig`<sup>Optional</sup> <a name="AdvancedOptionsConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.advancedOptionsConfig"></a>

```go
AdvancedOptionsConfig GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

advanced_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#advanced_options_config GoogleComputeOrganizationSecurityPolicy#advanced_options_config}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#deletion_policy GoogleComputeOrganizationSecurityPolicy#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A textual description for the organization security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#description GoogleComputeOrganizationSecurityPolicy#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User-provided name of the organization security policy.

The name should be unique in the organization in which the security policy is created. This should only be used when SecurityPolicyType is FIREWALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#display_name GoogleComputeOrganizationSecurityPolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#id GoogleComputeOrganizationSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ShortName`<sup>Optional</sup> <a name="ShortName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.shortName"></a>

```go
ShortName *string
```

- *Type:* *string

User-provided name of the organization security policy.

The name should be unique in the organization in which the security policy is created. This should only be used when SecurityPolicyType is CLOUD_ARMOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#short_name GoogleComputeOrganizationSecurityPolicy#short_name}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeOrganizationSecurityPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#timeouts GoogleComputeOrganizationSecurityPolicy#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type indicates the intended use of the security policy.

This field can be set only at resource creation time.

**NOTE** : 'FIREWALL' type is deprecated and will be removed in a future major release. Please use 'google_compute_firewall_policy' instead." Possible values: ["FIREWALL", "CLOUD_ARMOR", "CLOUD_ARMOR_EDGE", "CLOUD_ARMOR_INTERNAL_SERVICE", "CLOUD_ARMOR_NETWORK"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#type GoogleComputeOrganizationSecurityPolicy#type}

---

### GoogleComputeOrganizationSecurityPolicyTimeouts <a name="GoogleComputeOrganizationSecurityPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeorganizationsecuritypolicy"

&googlecomputeorganizationsecuritypolicy.GoogleComputeOrganizationSecurityPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#create GoogleComputeOrganizationSecurityPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#delete GoogleComputeOrganizationSecurityPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#update GoogleComputeOrganizationSecurityPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#create GoogleComputeOrganizationSecurityPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#delete GoogleComputeOrganizationSecurityPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_organization_security_policy#update GoogleComputeOrganizationSecurityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference <a name="GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeorganizationsecuritypolicy"

googlecomputeorganizationsecuritypolicy.NewGoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput">ContentTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes">ContentTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentTypesInput`<sup>Optional</sup> <a name="ContentTypesInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput"></a>

```go
func ContentTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContentTypes`<sup>Required</sup> <a name="ContentTypes" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes"></a>

```go
func ContentTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---


### GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference <a name="GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeorganizationsecuritypolicy"

googlecomputeorganizationsecuritypolicy.NewGoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig">PutJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig">ResetJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing">ResetJsonParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetRequestBodyInspectionSize">ResetRequestBodyInspectionSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetUserIpRequestHeaders">ResetUserIpRequestHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJsonCustomConfig` <a name="PutJsonCustomConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig"></a>

```go
func PutJsonCustomConfig(value GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---

##### `ResetJsonCustomConfig` <a name="ResetJsonCustomConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig"></a>

```go
func ResetJsonCustomConfig()
```

##### `ResetJsonParsing` <a name="ResetJsonParsing" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing"></a>

```go
func ResetJsonParsing()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel"></a>

```go
func ResetLogLevel()
```

##### `ResetRequestBodyInspectionSize` <a name="ResetRequestBodyInspectionSize" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetRequestBodyInspectionSize"></a>

```go
func ResetRequestBodyInspectionSize()
```

##### `ResetUserIpRequestHeaders` <a name="ResetUserIpRequestHeaders" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetUserIpRequestHeaders"></a>

```go
func ResetUserIpRequestHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig">JsonCustomConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput">JsonCustomConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput">JsonParsingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSizeInput">RequestBodyInspectionSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeadersInput">UserIpRequestHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing">JsonParsing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSize">RequestBodyInspectionSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders">UserIpRequestHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonCustomConfig`<sup>Required</sup> <a name="JsonCustomConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig"></a>

```go
func JsonCustomConfig() GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a>

---

##### `JsonCustomConfigInput`<sup>Optional</sup> <a name="JsonCustomConfigInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput"></a>

```go
func JsonCustomConfigInput() GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---

##### `JsonParsingInput`<sup>Optional</sup> <a name="JsonParsingInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput"></a>

```go
func JsonParsingInput() *string
```

- *Type:* *string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `RequestBodyInspectionSizeInput`<sup>Optional</sup> <a name="RequestBodyInspectionSizeInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSizeInput"></a>

```go
func RequestBodyInspectionSizeInput() *string
```

- *Type:* *string

---

##### `UserIpRequestHeadersInput`<sup>Optional</sup> <a name="UserIpRequestHeadersInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeadersInput"></a>

```go
func UserIpRequestHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `JsonParsing`<sup>Required</sup> <a name="JsonParsing" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing"></a>

```go
func JsonParsing() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `RequestBodyInspectionSize`<sup>Required</sup> <a name="RequestBodyInspectionSize" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSize"></a>

```go
func RequestBodyInspectionSize() *string
```

- *Type:* *string

---

##### `UserIpRequestHeaders`<sup>Required</sup> <a name="UserIpRequestHeaders" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders"></a>

```go
func UserIpRequestHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

---


### GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference <a name="GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeorganizationsecuritypolicy"

googlecomputeorganizationsecuritypolicy.NewGoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



