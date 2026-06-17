# `googleSecureSourceManagerRepositoryIamMember` Submodule <a name="`googleSecureSourceManagerRepositoryIamMember` Submodule" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecureSourceManagerRepositoryIamMember <a name="GoogleSecureSourceManagerRepositoryIamMember" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member google_secure_source_manager_repository_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSecureSourceManagerRepositoryIamMember(Construct Scope, string Id, GoogleSecureSourceManagerRepositoryIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig">GoogleSecureSourceManagerRepositoryIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig">GoogleSecureSourceManagerRepositoryIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.putCondition"></a>

```csharp
private void PutCondition(GoogleSecureSourceManagerRepositoryIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberCondition">GoogleSecureSourceManagerRepositoryIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSecureSourceManagerRepositoryIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSecureSourceManagerRepositoryIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSecureSourceManagerRepositoryIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSecureSourceManagerRepositoryIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSecureSourceManagerRepositoryIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleSecureSourceManagerRepositoryIamMember resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSecureSourceManagerRepositoryIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSecureSourceManagerRepositoryIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSecureSourceManagerRepositoryIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference">GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberCondition">GoogleSecureSourceManagerRepositoryIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.condition"></a>

```csharp
public GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference">GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.conditionInput"></a>

```csharp
public GoogleSecureSourceManagerRepositoryIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberCondition">GoogleSecureSourceManagerRepositoryIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecureSourceManagerRepositoryIamMemberCondition <a name="GoogleSecureSourceManagerRepositoryIamMemberCondition" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSecureSourceManagerRepositoryIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#expression GoogleSecureSourceManagerRepositoryIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#title GoogleSecureSourceManagerRepositoryIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#description GoogleSecureSourceManagerRepositoryIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#expression GoogleSecureSourceManagerRepositoryIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#title GoogleSecureSourceManagerRepositoryIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#description GoogleSecureSourceManagerRepositoryIamMember#description}.

---

### GoogleSecureSourceManagerRepositoryIamMemberConfig <a name="GoogleSecureSourceManagerRepositoryIamMemberConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSecureSourceManagerRepositoryIamMemberConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Member,
    string RepositoryId,
    string Role,
    GoogleSecureSourceManagerRepositoryIamMemberCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#member GoogleSecureSourceManagerRepositoryIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#repository_id GoogleSecureSourceManagerRepositoryIamMember#repository_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#role GoogleSecureSourceManagerRepositoryIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberCondition">GoogleSecureSourceManagerRepositoryIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#id GoogleSecureSourceManagerRepositoryIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#location GoogleSecureSourceManagerRepositoryIamMember#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#project GoogleSecureSourceManagerRepositoryIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#member GoogleSecureSourceManagerRepositoryIamMember#member}.

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#repository_id GoogleSecureSourceManagerRepositoryIamMember#repository_id}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#role GoogleSecureSourceManagerRepositoryIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.condition"></a>

```csharp
public GoogleSecureSourceManagerRepositoryIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberCondition">GoogleSecureSourceManagerRepositoryIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#condition GoogleSecureSourceManagerRepositoryIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#id GoogleSecureSourceManagerRepositoryIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#location GoogleSecureSourceManagerRepositoryIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_repository_iam_member#project GoogleSecureSourceManagerRepositoryIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference <a name="GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberCondition">GoogleSecureSourceManagerRepositoryIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleSecureSourceManagerRepositoryIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerRepositoryIamMember.GoogleSecureSourceManagerRepositoryIamMemberCondition">GoogleSecureSourceManagerRepositoryIamMemberCondition</a>

---



