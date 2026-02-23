# `googleHealthcareConsentStoreIamMember` Submodule <a name="`googleHealthcareConsentStoreIamMember` Submodule" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleHealthcareConsentStoreIamMember <a name="GoogleHealthcareConsentStoreIamMember" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member google_healthcare_consent_store_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googlehealthcareconsentstoreiammember"

googlehealthcareconsentstoreiammember.NewGoogleHealthcareConsentStoreIamMember(scope Construct, id *string, config GoogleHealthcareConsentStoreIamMemberConfig) GoogleHealthcareConsentStoreIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig">GoogleHealthcareConsentStoreIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig">GoogleHealthcareConsentStoreIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.putCondition"></a>

```go
func PutCondition(value GoogleHealthcareConsentStoreIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberCondition">GoogleHealthcareConsentStoreIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleHealthcareConsentStoreIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googlehealthcareconsentstoreiammember"

googlehealthcareconsentstoreiammember.GoogleHealthcareConsentStoreIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googlehealthcareconsentstoreiammember"

googlehealthcareconsentstoreiammember.GoogleHealthcareConsentStoreIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googlehealthcareconsentstoreiammember"

googlehealthcareconsentstoreiammember.GoogleHealthcareConsentStoreIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googlehealthcareconsentstoreiammember"

googlehealthcareconsentstoreiammember.GoogleHealthcareConsentStoreIamMember_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleHealthcareConsentStoreIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleHealthcareConsentStoreIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleHealthcareConsentStoreIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleHealthcareConsentStoreIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference">GoogleHealthcareConsentStoreIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberCondition">GoogleHealthcareConsentStoreIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.consentStoreIdInput">ConsentStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.datasetInput">DatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.consentStoreId">ConsentStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.condition"></a>

```go
func Condition() GoogleHealthcareConsentStoreIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference">GoogleHealthcareConsentStoreIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.conditionInput"></a>

```go
func ConditionInput() GoogleHealthcareConsentStoreIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberCondition">GoogleHealthcareConsentStoreIamMemberCondition</a>

---

##### `ConsentStoreIdInput`<sup>Optional</sup> <a name="ConsentStoreIdInput" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.consentStoreIdInput"></a>

```go
func ConsentStoreIdInput() *string
```

- *Type:* *string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.datasetInput"></a>

```go
func DatasetInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ConsentStoreId`<sup>Required</sup> <a name="ConsentStoreId" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.consentStoreId"></a>

```go
func ConsentStoreId() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleHealthcareConsentStoreIamMemberCondition <a name="GoogleHealthcareConsentStoreIamMemberCondition" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googlehealthcareconsentstoreiammember"

&googlehealthcareconsentstoreiammember.GoogleHealthcareConsentStoreIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#expression GoogleHealthcareConsentStoreIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#title GoogleHealthcareConsentStoreIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#description GoogleHealthcareConsentStoreIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#expression GoogleHealthcareConsentStoreIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#title GoogleHealthcareConsentStoreIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#description GoogleHealthcareConsentStoreIamMember#description}.

---

### GoogleHealthcareConsentStoreIamMemberConfig <a name="GoogleHealthcareConsentStoreIamMemberConfig" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googlehealthcareconsentstoreiammember"

&googlehealthcareconsentstoreiammember.GoogleHealthcareConsentStoreIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConsentStoreId: *string,
	Dataset: *string,
	Member: *string,
	Role: *string,
	Condition: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberCondition,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.consentStoreId">ConsentStoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#consent_store_id GoogleHealthcareConsentStoreIamMember#consent_store_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.dataset">Dataset</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#dataset GoogleHealthcareConsentStoreIamMember#dataset}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#member GoogleHealthcareConsentStoreIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#role GoogleHealthcareConsentStoreIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberCondition">GoogleHealthcareConsentStoreIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#id GoogleHealthcareConsentStoreIamMember#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConsentStoreId`<sup>Required</sup> <a name="ConsentStoreId" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.consentStoreId"></a>

```go
ConsentStoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#consent_store_id GoogleHealthcareConsentStoreIamMember#consent_store_id}.

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.dataset"></a>

```go
Dataset *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#dataset GoogleHealthcareConsentStoreIamMember#dataset}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#member GoogleHealthcareConsentStoreIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#role GoogleHealthcareConsentStoreIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.condition"></a>

```go
Condition GoogleHealthcareConsentStoreIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberCondition">GoogleHealthcareConsentStoreIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#condition GoogleHealthcareConsentStoreIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_consent_store_iam_member#id GoogleHealthcareConsentStoreIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleHealthcareConsentStoreIamMemberConditionOutputReference <a name="GoogleHealthcareConsentStoreIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googlehealthcareconsentstoreiammember"

googlehealthcareconsentstoreiammember.NewGoogleHealthcareConsentStoreIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleHealthcareConsentStoreIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberCondition">GoogleHealthcareConsentStoreIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleHealthcareConsentStoreIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareConsentStoreIamMember.GoogleHealthcareConsentStoreIamMemberCondition">GoogleHealthcareConsentStoreIamMemberCondition</a>

---



