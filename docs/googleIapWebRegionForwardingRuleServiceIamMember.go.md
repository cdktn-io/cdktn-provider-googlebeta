# `googleIapWebRegionForwardingRuleServiceIamMember` Submodule <a name="`googleIapWebRegionForwardingRuleServiceIamMember` Submodule" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapWebRegionForwardingRuleServiceIamMember <a name="GoogleIapWebRegionForwardingRuleServiceIamMember" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member google_iap_web_region_forwarding_rule_service_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiapwebregionforwardingruleserviceiammember"

googleiapwebregionforwardingruleserviceiammember.NewGoogleIapWebRegionForwardingRuleServiceIamMember(scope Construct, id *string, config GoogleIapWebRegionForwardingRuleServiceIamMemberConfig) GoogleIapWebRegionForwardingRuleServiceIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig">GoogleIapWebRegionForwardingRuleServiceIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig">GoogleIapWebRegionForwardingRuleServiceIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.putCondition"></a>

```go
func PutCondition(value GoogleIapWebRegionForwardingRuleServiceIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition">GoogleIapWebRegionForwardingRuleServiceIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIapWebRegionForwardingRuleServiceIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiapwebregionforwardingruleserviceiammember"

googleiapwebregionforwardingruleserviceiammember.GoogleIapWebRegionForwardingRuleServiceIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiapwebregionforwardingruleserviceiammember"

googleiapwebregionforwardingruleserviceiammember.GoogleIapWebRegionForwardingRuleServiceIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiapwebregionforwardingruleserviceiammember"

googleiapwebregionforwardingruleserviceiammember.GoogleIapWebRegionForwardingRuleServiceIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiapwebregionforwardingruleserviceiammember"

googleiapwebregionforwardingruleserviceiammember.GoogleIapWebRegionForwardingRuleServiceIamMember_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleIapWebRegionForwardingRuleServiceIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIapWebRegionForwardingRuleServiceIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIapWebRegionForwardingRuleServiceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIapWebRegionForwardingRuleServiceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference">GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition">GoogleIapWebRegionForwardingRuleServiceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.forwardingRuleRegionServiceNameInput">ForwardingRuleRegionServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.forwardingRuleRegionServiceName">ForwardingRuleRegionServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.condition"></a>

```go
func Condition() GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference">GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.conditionInput"></a>

```go
func ConditionInput() GoogleIapWebRegionForwardingRuleServiceIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition">GoogleIapWebRegionForwardingRuleServiceIamMemberCondition</a>

---

##### `ForwardingRuleRegionServiceNameInput`<sup>Optional</sup> <a name="ForwardingRuleRegionServiceNameInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.forwardingRuleRegionServiceNameInput"></a>

```go
func ForwardingRuleRegionServiceNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ForwardingRuleRegionServiceName`<sup>Required</sup> <a name="ForwardingRuleRegionServiceName" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.forwardingRuleRegionServiceName"></a>

```go
func ForwardingRuleRegionServiceName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapWebRegionForwardingRuleServiceIamMemberCondition <a name="GoogleIapWebRegionForwardingRuleServiceIamMemberCondition" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiapwebregionforwardingruleserviceiammember"

&googleiapwebregionforwardingruleserviceiammember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#expression GoogleIapWebRegionForwardingRuleServiceIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#title GoogleIapWebRegionForwardingRuleServiceIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#description GoogleIapWebRegionForwardingRuleServiceIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#expression GoogleIapWebRegionForwardingRuleServiceIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#title GoogleIapWebRegionForwardingRuleServiceIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#description GoogleIapWebRegionForwardingRuleServiceIamMember#description}.

---

### GoogleIapWebRegionForwardingRuleServiceIamMemberConfig <a name="GoogleIapWebRegionForwardingRuleServiceIamMemberConfig" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiapwebregionforwardingruleserviceiammember"

&googleiapwebregionforwardingruleserviceiammember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ForwardingRuleRegionServiceName: *string,
	Member: *string,
	Role: *string,
	Condition: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.forwardingRuleRegionServiceName">ForwardingRuleRegionServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#forwarding_rule_region_service_name GoogleIapWebRegionForwardingRuleServiceIamMember#forwarding_rule_region_service_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#member GoogleIapWebRegionForwardingRuleServiceIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#role GoogleIapWebRegionForwardingRuleServiceIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition">GoogleIapWebRegionForwardingRuleServiceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#id GoogleIapWebRegionForwardingRuleServiceIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#project GoogleIapWebRegionForwardingRuleServiceIamMember#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#region GoogleIapWebRegionForwardingRuleServiceIamMember#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ForwardingRuleRegionServiceName`<sup>Required</sup> <a name="ForwardingRuleRegionServiceName" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.forwardingRuleRegionServiceName"></a>

```go
ForwardingRuleRegionServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#forwarding_rule_region_service_name GoogleIapWebRegionForwardingRuleServiceIamMember#forwarding_rule_region_service_name}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#member GoogleIapWebRegionForwardingRuleServiceIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#role GoogleIapWebRegionForwardingRuleServiceIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.condition"></a>

```go
Condition GoogleIapWebRegionForwardingRuleServiceIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition">GoogleIapWebRegionForwardingRuleServiceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#condition GoogleIapWebRegionForwardingRuleServiceIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#id GoogleIapWebRegionForwardingRuleServiceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#project GoogleIapWebRegionForwardingRuleServiceIamMember#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#region GoogleIapWebRegionForwardingRuleServiceIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference <a name="GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiapwebregionforwardingruleserviceiammember"

googleiapwebregionforwardingruleserviceiammember.NewGoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition">GoogleIapWebRegionForwardingRuleServiceIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIapWebRegionForwardingRuleServiceIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition">GoogleIapWebRegionForwardingRuleServiceIamMemberCondition</a>

---



