# `googleKmsProjectKajPolicyConfig` Submodule <a name="`googleKmsProjectKajPolicyConfig` Submodule" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsProjectKajPolicyConfig <a name="GoogleKmsProjectKajPolicyConfig" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_kaj_policy_config google_kms_project_kaj_policy_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsProjectKajPolicyConfig(Construct Scope, string Id, GoogleKmsProjectKajPolicyConfigConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig">GoogleKmsProjectKajPolicyConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig">GoogleKmsProjectKajPolicyConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.putDefaultKeyAccessJustificationPolicy">PutDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy">ResetDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultKeyAccessJustificationPolicy` <a name="PutDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.putDefaultKeyAccessJustificationPolicy"></a>

```csharp
private void PutDefaultKeyAccessJustificationPolicy(GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.putDefaultKeyAccessJustificationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleKmsProjectKajPolicyConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts">GoogleKmsProjectKajPolicyConfigTimeouts</a>

---

##### `ResetDefaultKeyAccessJustificationPolicy` <a name="ResetDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy"></a>

```csharp
private void ResetDefaultKeyAccessJustificationPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleKmsProjectKajPolicyConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleKmsProjectKajPolicyConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleKmsProjectKajPolicyConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleKmsProjectKajPolicyConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleKmsProjectKajPolicyConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleKmsProjectKajPolicyConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleKmsProjectKajPolicyConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleKmsProjectKajPolicyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_kaj_policy_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleKmsProjectKajPolicyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.defaultKeyAccessJustificationPolicy">DefaultKeyAccessJustificationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference">GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput">DefaultKeyAccessJustificationPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts">GoogleKmsProjectKajPolicyConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DefaultKeyAccessJustificationPolicy`<sup>Required</sup> <a name="DefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.defaultKeyAccessJustificationPolicy"></a>

```csharp
public GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference DefaultKeyAccessJustificationPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.timeouts"></a>

```csharp
public GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference">GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference</a>

---

##### `DefaultKeyAccessJustificationPolicyInput`<sup>Optional</sup> <a name="DefaultKeyAccessJustificationPolicyInput" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput"></a>

```csharp
public GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy DefaultKeyAccessJustificationPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleKmsProjectKajPolicyConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts">GoogleKmsProjectKajPolicyConfigTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsProjectKajPolicyConfigConfig <a name="GoogleKmsProjectKajPolicyConfigConfig" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsProjectKajPolicyConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy DefaultKeyAccessJustificationPolicy = null,
    string Id = null,
    string Project = null,
    GoogleKmsProjectKajPolicyConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy">DefaultKeyAccessJustificationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | default_key_access_justification_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_kaj_policy_config#id GoogleKmsProjectKajPolicyConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_kaj_policy_config#project GoogleKmsProjectKajPolicyConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts">GoogleKmsProjectKajPolicyConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DefaultKeyAccessJustificationPolicy`<sup>Optional</sup> <a name="DefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy"></a>

```csharp
public GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy DefaultKeyAccessJustificationPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

default_key_access_justification_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_kaj_policy_config#default_key_access_justification_policy GoogleKmsProjectKajPolicyConfig#default_key_access_justification_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_kaj_policy_config#id GoogleKmsProjectKajPolicyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_kaj_policy_config#project GoogleKmsProjectKajPolicyConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.timeouts"></a>

```csharp
public GoogleKmsProjectKajPolicyConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts">GoogleKmsProjectKajPolicyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_kaj_policy_config#timeouts GoogleKmsProjectKajPolicyConfig#timeouts}

---

### GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy <a name="GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy {
    string[] AllowedAccessReasons = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons">AllowedAccessReasons</a></code> | <code>string[]</code> | A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey. |

---

##### `AllowedAccessReasons`<sup>Optional</sup> <a name="AllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons"></a>

```csharp
public string[] AllowedAccessReasons { get; set; }
```

- *Type:* string[]

A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey.

Possible values: ["CUSTOMER_INITIATED_SUPPORT", "GOOGLE_INITIATED_SERVICE", "THIRD_PARTY_DATA_REQUEST", "GOOGLE_INITIATED_REVIEW", "CUSTOMER_INITIATED_ACCESS", "GOOGLE_INITIATED_SYSTEM_OPERATION", "REASON_NOT_EXPECTED", "MODIFIED_CUSTOMER_INITIATED_ACCESS", "MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION", "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT", "CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_kaj_policy_config#allowed_access_reasons GoogleKmsProjectKajPolicyConfig#allowed_access_reasons}

---

### GoogleKmsProjectKajPolicyConfigTimeouts <a name="GoogleKmsProjectKajPolicyConfigTimeouts" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsProjectKajPolicyConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_kaj_policy_config#create GoogleKmsProjectKajPolicyConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_kaj_policy_config#delete GoogleKmsProjectKajPolicyConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_kaj_policy_config#update GoogleKmsProjectKajPolicyConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_kaj_policy_config#create GoogleKmsProjectKajPolicyConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_kaj_policy_config#delete GoogleKmsProjectKajPolicyConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_kaj_policy_config#update GoogleKmsProjectKajPolicyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference <a name="GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons">ResetAllowedAccessReasons</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAccessReasons` <a name="ResetAllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons"></a>

```csharp
private void ResetAllowedAccessReasons()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput">AllowedAccessReasonsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons">AllowedAccessReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAccessReasonsInput`<sup>Optional</sup> <a name="AllowedAccessReasonsInput" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput"></a>

```csharp
public string[] AllowedAccessReasonsInput { get; }
```

- *Type:* string[]

---

##### `AllowedAccessReasons`<sup>Required</sup> <a name="AllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons"></a>

```csharp
public string[] AllowedAccessReasons { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---


### GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference <a name="GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts">GoogleKmsProjectKajPolicyConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleKmsProjectKajPolicyConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts">GoogleKmsProjectKajPolicyConfigTimeouts</a>

---



